import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AvailabilityCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate current month calendar
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const today = currentDate.getDate();

  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Available time slots
  const timeSlots = [
    { time: '09:00', label: '09:00 WIB', available: true },
    { time: '10:00', label: '10:00 WIB', available: true },
    { time: '11:00', label: '11:00 WIB', available: false },
    { time: '13:00', label: '13:00 WIB', available: true },
    { time: '14:00', label: '14:00 WIB', available: true },
    { time: '15:00', label: '15:00 WIB', available: true },
    { time: '16:00', label: '16:00 WIB', available: false }
  ];

  // Mock availability data
  const availability = {
    available: [5, 6, 8, 9, 12, 13, 15, 16, 19, 20, 22, 23, 26, 27, 29, 30],
    busy: [7, 10, 14, 17, 21, 24, 28],
    unavailable: [1, 2, 3, 4, 11, 18, 25] // weekends and holidays
  };

  const getDateStatus = (date) => {
    if (date < today) return 'past';
    if (availability.available.includes(date)) return 'available';
    if (availability.busy.includes(date)) return 'busy';
    return 'unavailable';
  };

  const getDateClassName = (date, status) => {
    const baseClasses = 'w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 cursor-pointer';
    
    switch (status) {
      case 'past':
        return `${baseClasses} text-muted-foreground/50 cursor-not-allowed`;
      case 'available':
        return `${baseClasses} text-foreground hover:bg-accent/20 hover:text-accent ${
          selectedDate === date ? 'bg-accent text-background' : 'hover:scale-105'
        }`;
      case 'busy':
        return `${baseClasses} text-warning bg-warning/10 cursor-not-allowed`;
      case 'unavailable':
        return `${baseClasses} text-muted-foreground cursor-not-allowed`;
      default:
        return baseClasses;
    }
  };

  const handleDateClick = (date) => {
    const status = getDateStatus(date);
    if (status === 'available') {
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time) => {
    if (timeSlots.find(slot => slot.time === time)?.available) {
      setSelectedTime(time);
    }
  };

  const handleBookMeeting = () => {
    if (selectedDate && selectedTime) {
      const meetingDate = `${selectedDate} ${monthNames[currentMonth]} ${currentYear}`;
      const meetingTime = timeSlots.find(slot => slot.time === selectedTime)?.label;
      const message = `Halo, saya ingin menjadwalkan meeting pada ${meetingDate} pukul ${meetingTime}. Mohon konfirmasi ketersediaan Anda.`;
      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  // Generate calendar days
  const calendarDays = [];
  
  // Empty cells for days before month starts
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
  }
  
  // Days of the month
  for (let date = 1; date <= daysInMonth; date++) {
    const status = getDateStatus(date);
    calendarDays.push(
      <div
        key={date}
        className={getDateClassName(date, status)}
        onClick={() => handleDateClick(date)}
      >
        {date}
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 border border-border/20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Jadwal Ketersediaan
        </h2>
        <p className="text-muted-foreground">
          Pilih tanggal dan waktu yang sesuai untuk meeting atau konsultasi. Semua waktu dalam zona WIB (UTC+7).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              {monthNames[currentMonth]} {currentYear}
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" iconName="ChevronLeft" />
              <Button variant="ghost" size="sm" iconName="ChevronRight" />
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {dayNames.map(day => (
              <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1">
            {calendarDays}
          </div>

          {/* Legend */}
          <div className="mt-6 space-y-2">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-accent rounded"></div>
              <span className="text-sm text-muted-foreground">Tersedia</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-warning/20 border border-warning rounded"></div>
              <span className="text-sm text-muted-foreground">Sibuk</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-muted rounded"></div>
              <span className="text-sm text-muted-foreground">Tidak tersedia</span>
            </div>
          </div>
        </div>

        {/* Time slots and booking */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">
            {selectedDate ? `Waktu Tersedia - ${selectedDate} ${monthNames[currentMonth]}` : 'Pilih Tanggal Terlebih Dahulu'}
          </h3>

          {selectedDate ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map(slot => (
                  <button
                    key={slot.time}
                    onClick={() => handleTimeClick(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                      slot.available
                        ? selectedTime === slot.time
                          ? 'bg-accent text-background border-accent' :'bg-surface border-border hover:border-accent/50 text-foreground hover:bg-accent/10' :'bg-muted/20 border-muted text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    {slot.label}
                    {!slot.available && (
                      <div className="text-xs mt-1">Tidak tersedia</div>
                    )}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="Calendar" size={20} className="text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">
                        Meeting Terjadwal
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedDate} {monthNames[currentMonth]} {currentYear} - {timeSlots.find(slot => slot.time === selectedTime)?.label}
                      </p>
                    </div>
                  </div>
                  
                  <Button
                    variant="default"
                    fullWidth
                    iconName="MessageCircle"
                    iconPosition="left"
                    onClick={handleBookMeeting}
                    className="bg-accent hover:bg-accent/90 text-background"
                  >
                    Konfirmasi via WhatsApp
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">
                Pilih tanggal pada kalender untuk melihat waktu yang tersedia
              </p>
            </div>
          )}

          {/* Meeting types */}
          <div className="mt-8 space-y-4">
            <h4 className="font-semibold text-foreground">Jenis Meeting Tersedia:</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-surface/50 rounded-lg">
                <Icon name="Video" size={20} className="text-accent" />
                <div>
                  <p className="font-medium text-foreground">Video Call (30 menit)</p>
                  <p className="text-sm text-muted-foreground">Diskusi awal proyek & konsultasi</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-surface/50 rounded-lg">
                <Icon name="Users" size={20} className="text-success" />
                <div>
                  <p className="font-medium text-foreground">Meeting Tim (60 menit)</p>
                  <p className="text-sm text-muted-foreground">Presentasi & diskusi mendalam</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-surface/50 rounded-lg">
                <Icon name="Coffee" size={20} className="text-warning" />
                <div>
                  <p className="font-medium text-foreground">Coffee Chat (45 menit)</p>
                  <p className="text-sm text-muted-foreground">Networking & brainstorming santai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailabilityCalendar;