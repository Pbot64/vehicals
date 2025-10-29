'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Calculator,
  TrendingUp,
  Shield,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Finance() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [downPayment, setDownPayment] = useState(5000);
  const [apr, setApr] = useState(6.5);
  const [term, setTerm] = useState(60);

  const principal = loanAmount - downPayment;
  const monthlyRate = apr / 100 / 12;
  const monthlyPayment =
    principal > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) /
        (Math.pow(1 + monthlyRate, term) - 1)
      : 0;
  const totalPaid = monthlyPayment * term + downPayment;
  const totalInterest = totalPaid - loanAmount;

  const creditTiers = [
    {
      title: 'Excellent Credit',
      range: '720+',
      apr: '3.5% - 5.5%',
      description: 'Best rates available with excellent credit history',
    },
    {
      title: 'Good Credit',
      range: '680-719',
      apr: '5.5% - 8.5%',
      description: 'Competitive rates for solid credit scores',
    },
    {
      title: 'Fair Credit',
      range: '620-679',
      apr: '8.5% - 12%',
      description: 'Multiple options for average credit',
    },
    {
      title: 'Building Credit',
      range: 'Below 620',
      apr: '12% - 18%',
      description: 'We work with all credit levels',
    },
  ];

  const faqs = [
    {
      question: 'How do I get pre-approved?',
      answer:
        "Simply fill out our online application or contact us directly. Pre-approval typically takes 5-10 minutes and won't affect your credit score.",
    },
    {
      question: 'What documents do I need?',
      answer:
        "You'll need proof of income, valid ID, proof of residence, and proof of insurance. We'll guide you through the exact requirements during your application.",
    },
    {
      question: 'Can I trade in my current vehicle?',
      answer:
        'Absolutely! We accept trade-ins and will provide a fair market value appraisal that can be applied toward your down payment.',
    },
    {
      question: 'What loan terms do you offer?',
      answer:
        'We offer flexible terms from 24 to 84 months, allowing you to choose a monthly payment that fits your budget.',
    },
  ];

  return (
    <div className='min-h-screen bg-neutral-50'>
      {/* Hero */}
      <div className='bg-linear-to-br from-blue-600 to-blue-700 text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-3xl'
          >
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              Flexible Financing Options
            </h1>
            <p className='text-xl text-blue-100 mb-8'>
              Get pre-approved in minutes with competitive rates. We work with
              all credit levels.
            </p>
            <Link href='/contact'>
              <Button
                size='lg'
                className='bg-white text-blue-600 hover:bg-blue-50'
              >
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Payment Estimator */}
        <div className='mb-16'>
          <div className='text-center mb-12'>
            <Calculator className='w-12 h-12 text-blue-600 mx-auto mb-4' />
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>
              Payment Estimator
            </h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              Calculate your estimated monthly payment
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Calculator */}
            <div className='bg-white rounded-xl shadow-sm p-8'>
              <div className='space-y-8'>
                {/* Loan Amount */}
                <div>
                  <div className='flex justify-between mb-3'>
                    <label className='text-sm font-medium text-slate-700'>
                      Vehicle Price
                    </label>
                    <span className='text-lg font-bold text-blue-600'>
                      ${loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[loanAmount]}
                    onValueChange={(value: number[]) => setLoanAmount(value[0])}
                    min={5000}
                    max={100000}
                    step={1000}
                    className='w-full'
                  />
                </div>

                {/* Down Payment */}
                <div>
                  <div className='flex justify-between mb-3'>
                    <label className='text-sm font-medium text-slate-700'>
                      Down Payment
                    </label>
                    <span className='text-lg font-bold text-blue-600'>
                      ${downPayment.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[downPayment]}
                    onValueChange={(value: number[]) =>
                      setDownPayment(value[0])
                    }
                    min={0}
                    max={loanAmount}
                    step={500}
                    className='w-full'
                  />
                </div>

                {/* APR */}
                <div>
                  <div className='flex justify-between mb-3'>
                    <label className='text-sm font-medium text-slate-700'>
                      Interest Rate (APR)
                    </label>
                    <span className='text-lg font-bold text-blue-600'>
                      {apr.toFixed(1)}%
                    </span>
                  </div>
                  <Slider
                    value={[apr]}
                    onValueChange={(value: number[]) => setApr(value[0])}
                    min={2}
                    max={20}
                    step={0.1}
                    className='w-full'
                  />
                </div>

                {/* Term */}
                <div>
                  <div className='flex justify-between mb-3'>
                    <label className='text-sm font-medium text-slate-700'>
                      Loan Term
                    </label>
                    <span className='text-lg font-bold text-blue-600'>
                      {term} months
                    </span>
                  </div>
                  <Slider
                    value={[term]}
                    onValueChange={(value: number[]) => setTerm(value[0])}
                    min={24}
                    max={84}
                    step={6}
                    className='w-full'
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className='bg-linear-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white mb-6'>
                <h3 className='text-lg font-medium text-blue-100 mb-2'>
                  Estimated Monthly Payment
                </h3>
                <div className='text-5xl font-bold mb-6'>
                  ${monthlyPayment.toFixed(0)}
                  <span className='text-2xl'>/mo</span>
                </div>
                <div className='space-y-2 text-blue-100'>
                  <div className='flex justify-between'>
                    <span>Loan Amount:</span>
                    <span className='font-semibold'>
                      ${principal.toLocaleString()}
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Total Interest:</span>
                    <span className='font-semibold'>
                      ${totalInterest.toFixed(0).toLocaleString()}
                    </span>
                  </div>
                  <div className='flex justify-between border-t border-blue-500 pt-2'>
                    <span>Total Paid:</span>
                    <span className='font-semibold'>
                      ${totalPaid.toFixed(0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-sm p-6'>
                <p className='text-sm text-slate-600 mb-4'>
                  This is an estimate only. Your actual payment may vary based
                  on your credit score, down payment, and other factors.
                </p>
                <Link href='/contact'>
                  <Button className='w-full bg-blue-600 hover:bg-blue-700 text-white'>
                    Get Pre-Approved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Tiers */}
        <div className='mb-16'>
          <div className='text-center mb-12'>
            <TrendingUp className='w-12 h-12 text-blue-600 mx-auto mb-4' />
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>
              Rates by Credit Tier
            </h2>
            <p className='text-lg text-slate-600 max-w-2xl mx-auto'>
              We offer competitive rates for all credit levels
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {creditTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'
              >
                <div className='text-center'>
                  <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Shield className='w-8 h-8 text-blue-600' />
                  </div>
                  <h3 className='text-xl font-bold text-slate-900 mb-2'>
                    {tier.title}
                  </h3>
                  <div className='text-2xl font-bold text-blue-600 mb-2'>
                    {tier.range}
                  </div>
                  <div className='text-sm font-medium text-slate-700 mb-3'>
                    {tier.apr}
                  </div>
                  <p className='text-sm text-slate-600'>{tier.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className='mb-16'>
          <div className='bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white'>
            <div className='max-w-4xl mx-auto'>
              <h2 className='text-3xl font-bold mb-8 text-center'>
                Why Finance with Summit Motors?
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {[
                  '5-minute pre-approval process',
                  'No impact on credit score for pre-approval',
                  'Competitive rates from multiple lenders',
                  'Flexible terms from 24-84 months',
                  'Trade-ins accepted',
                  'Same-day approvals available',
                  'Online and in-person applications',
                  'Dedicated finance specialists',
                ].map((benefit, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <CheckCircle className='w-6 h-6 text-green-400 shrink-0' />
                    <span className='text-slate-100'>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div>
          <div className='text-center mb-12'>
            <HelpCircle className='w-12 h-12 text-blue-600 mx-auto mb-4' />
            <h2 className='text-3xl font-bold text-slate-900 mb-4'>
              Frequently Asked Questions
            </h2>
          </div>

          <div className='max-w-3xl mx-auto space-y-4'>
            {faqs.map((faq, index) => (
              <div key={index} className='bg-white rounded-xl shadow-sm p-6'>
                <h3 className='text-lg font-semibold text-slate-900 mb-2'>
                  {faq.question}
                </h3>
                <p className='text-slate-600'>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
