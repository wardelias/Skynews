'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LeadForm({ className = '' }: { className?: string }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    investmentAmount: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('تم تقديم النموذج بنجاح');
        setFormData({ fullName: '', email: '', phone: '', investmentAmount: '' });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ أثناء تقديم النموذج. يرجى المحاولة مرة أخرى.');
    }
  };

  return (
    <form className={`space-y-4 ${className}`} onSubmit={handleSubmit}>
      <Input
        name="fullName"
        placeholder="الاسم الكامل"
        className="text-right"
        value={formData.fullName}
        onChange={handleChange}
        required
      />
      <Input
        name="email"
        placeholder="البريد الإلكتروني"
        type="email"
        className="text-right"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        name="phone"
        placeholder="رقم الهاتف"
        type="tel"
        className="text-right"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <Input
        name="investmentAmount"
        placeholder="مبلغ الاستثمار المتوقع"
        type="number"
        className="text-right"
        value={formData.investmentAmount}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full">سجّل الآن</Button>
    </form>
  );
}