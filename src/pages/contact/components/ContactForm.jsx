import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    agreeToTerms: false,
    subscribeNewsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypeOptions = [
    { value: 'web-development', label: 'Pengembangan Website' },
    { value: 'mobile-app', label: 'Aplikasi Mobile' },
    { value: 'ui-ux-design', label: 'Desain UI/UX' },
    { value: 'consulting', label: 'Konsultasi Teknis' },
    { value: 'maintenance', label: 'Pemeliharaan & Support' },
    { value: 'other', label: 'Lainnya' }
  ];

  const budgetOptions = [
    { value: '5-15', label: 'IDR 5-15 Juta' },
    { value: '15-30', label: 'IDR 15-30 Juta' },
    { value: '30-50', label: 'IDR 30-50 Juta' },
    { value: '50-100', label: 'IDR 50-100 Juta' },
    { value: '100+', label: 'IDR 100+ Juta' },
    { value: 'discuss', label: 'Mari Diskusikan' }
  ];

  const timelineOptions = [
    { value: '1-2-weeks', label: '1-2 Minggu' },
    { value: '1-month', label: '1 Bulan' },
    { value: '2-3-months', label: '2-3 Bulan' },
    { value: '3-6-months', label: '3-6 Bulan' },
    { value: '6-months+', label: '6+ Bulan' },
    { value: 'flexible', label: 'Fleksibel' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor telepon wajib diisi';
    } else if (!/^(\+62|62|0)[0-9]{9,13}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Format nomor telepon Indonesia tidak valid';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Jenis proyek wajib dipilih';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Deskripsi proyek wajib diisi';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Deskripsi proyek minimal 20 karakter';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Anda harus menyetujui syarat dan ketentuan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: '',
        agreeToTerms: false,
        subscribeNewsletter: false
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 border border-border/20 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="CheckCircle" size={32} color="var(--color-success)" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Pesan Terkirim!
        </h3>
        <p className="text-muted-foreground mb-6">
          Terima kasih atas minat Anda. Saya akan merespons dalam 24 jam ke depan.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
          iconName="RotateCcw"
          iconPosition="left"
        >
          Kirim Pesan Lain
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 border border-border/20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Mari Berkolaborasi
        </h2>
        <p className="text-muted-foreground">
          Ceritakan proyek Anda dan mari kita wujudkan ide menjadi kenyataan digital yang luar biasa.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nama Lengkap"
            type="text"
            name="name"
            placeholder="Masukkan nama lengkap Anda"
            value={formData.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="nama@email.com"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nomor Telepon"
            type="tel"
            name="phone"
            placeholder="+62 812 3456 7890"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            required
          />

          <Input
            label="Perusahaan/Organisasi"
            type="text"
            name="company"
            placeholder="Nama perusahaan (opsional)"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Select
            label="Jenis Proyek"
            options={projectTypeOptions}
            value={formData.projectType}
            onChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
            placeholder="Pilih jenis proyek"
            error={errors.projectType}
            required
          />

          <Select
            label="Estimasi Budget"
            options={budgetOptions}
            value={formData.budget}
            onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
            placeholder="Pilih range budget"
          />

          <Select
            label="Timeline Proyek"
            options={timelineOptions}
            value={formData.timeline}
            onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
            placeholder="Pilih timeline"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Deskripsi Proyek <span className="text-destructive">*</span>
          </label>
          <textarea
            name="message"
            rows={6}
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 focus:outline-none transition-colors resize-none"
            placeholder="Ceritakan detail proyek Anda, tujuan bisnis, target audience, fitur yang diinginkan, dan ekspektasi lainnya..."
            value={formData.message}
            onChange={handleInputChange}
          />
          {errors.message && (
            <p className="mt-2 text-sm text-destructive">{errors.message}</p>
          )}
          <p className="mt-2 text-xs text-muted-foreground">
            Minimal 20 karakter ({formData.message.length}/20)
          </p>
        </div>

        <div className="space-y-4">
          <Checkbox
            label="Saya setuju dengan syarat dan ketentuan serta kebijakan privasi"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleInputChange}
            error={errors.agreeToTerms}
            required
          />

          <Checkbox
            label="Saya ingin menerima newsletter dan update terbaru"
            name="subscribeNewsletter"
            checked={formData.subscribeNewsletter}
            onChange={handleInputChange}
          />
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            loading={isSubmitting}
            iconName="Send"
            iconPosition="right"
            className="bg-gradient-to-r from-accent to-success hover:from-accent/90 hover:to-success/90 text-background font-semibold"
          >
            {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan'}
          </Button>
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            <Icon name="Shield" size={16} className="inline mr-2" />
            Data Anda aman dan tidak akan dibagikan kepada pihak ketiga
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;