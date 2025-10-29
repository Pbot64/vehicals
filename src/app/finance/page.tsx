import { useState } from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
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
    <div
      data-source-location='pages/Finance:70:4'
      data-dynamic-content='true'
      className='min-h-screen bg-neutral-50'
    >
      {/* Hero */}
      <div
        data-source-location='pages/Finance:72:6'
        data-dynamic-content='true'
        className='bg-gradient-to-br from-blue-600 to-blue-700 text-white py-20'
      >
        <div
          data-source-location='pages/Finance:73:8'
          data-dynamic-content='true'
          className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
        >
          <motion.div
            data-source-location='pages/Finance:74:10'
            data-dynamic-content='true'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='max-w-3xl'
          >
            <h1
              data-source-location='pages/Finance:79:12'
              data-dynamic-content='false'
              className='text-4xl md:text-5xl font-bold mb-4'
            >
              Flexible Financing Options
            </h1>
            <p
              data-source-location='pages/Finance:80:12'
              data-dynamic-content='false'
              className='text-xl text-blue-100 mb-8'
            >
              Get pre-approved in minutes with competitive rates. We work with
              all credit levels.
            </p>
            <Link
              data-source-location='pages/Finance:83:12'
              data-dynamic-content='false'
              to={createPageUrl('Contact')}
            >
              <Button
                data-source-location='pages/Finance:84:14'
                data-dynamic-content='false'
                size='lg'
                className='bg-white text-blue-600 hover:bg-blue-50'
              >
                Apply Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div
        data-source-location='pages/Finance:92:6'
        data-dynamic-content='true'
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'
      >
        {/* Payment Estimator */}
        <div
          data-source-location='pages/Finance:94:8'
          data-dynamic-content='true'
          className='mb-16'
        >
          <div
            data-source-location='pages/Finance:95:10'
            data-dynamic-content='false'
            className='text-center mb-12'
          >
            <Calculator
              data-source-location='pages/Finance:96:12'
              data-dynamic-content='false'
              className='w-12 h-12 text-blue-600 mx-auto mb-4'
            />
            <h2
              data-source-location='pages/Finance:97:12'
              data-dynamic-content='false'
              className='text-3xl font-bold text-slate-900 mb-4'
            >
              Payment Estimator
            </h2>
            <p
              data-source-location='pages/Finance:98:12'
              data-dynamic-content='false'
              className='text-lg text-slate-600 max-w-2xl mx-auto'
            >
              Calculate your estimated monthly payment
            </p>
          </div>

          <div
            data-source-location='pages/Finance:103:10'
            data-dynamic-content='true'
            className='grid grid-cols-1 lg:grid-cols-2 gap-8'
          >
            {/* Calculator */}
            <div
              data-source-location='pages/Finance:105:12'
              data-dynamic-content='true'
              className='bg-white rounded-xl shadow-sm p-8'
            >
              <div
                data-source-location='pages/Finance:106:14'
                data-dynamic-content='true'
                className='space-y-8'
              >
                {/* Loan Amount */}
                <div
                  data-source-location='pages/Finance:108:16'
                  data-dynamic-content='true'
                >
                  <div
                    data-source-location='pages/Finance:109:18'
                    data-dynamic-content='true'
                    className='flex justify-between mb-3'
                  >
                    <label
                      data-source-location='pages/Finance:110:20'
                      data-dynamic-content='false'
                      className='text-sm font-medium text-slate-700'
                    >
                      Vehicle Price
                    </label>
                    <span
                      data-source-location='pages/Finance:111:20'
                      data-dynamic-content='true'
                      className='text-lg font-bold text-blue-600'
                    >
                      ${loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    data-source-location='pages/Finance:115:18'
                    data-dynamic-content='false'
                    value={[loanAmount]}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    min={5000}
                    max={100000}
                    step={1000}
                    className='w-full'
                  />
                </div>

                {/* Down Payment */}
                <div
                  data-source-location='pages/Finance:126:16'
                  data-dynamic-content='true'
                >
                  <div
                    data-source-location='pages/Finance:127:18'
                    data-dynamic-content='true'
                    className='flex justify-between mb-3'
                  >
                    <label
                      data-source-location='pages/Finance:128:20'
                      data-dynamic-content='false'
                      className='text-sm font-medium text-slate-700'
                    >
                      Down Payment
                    </label>
                    <span
                      data-source-location='pages/Finance:129:20'
                      data-dynamic-content='true'
                      className='text-lg font-bold text-blue-600'
                    >
                      ${downPayment.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    data-source-location='pages/Finance:133:18'
                    data-dynamic-content='false'
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    min={0}
                    max={loanAmount}
                    step={500}
                    className='w-full'
                  />
                </div>

                {/* APR */}
                <div
                  data-source-location='pages/Finance:144:16'
                  data-dynamic-content='true'
                >
                  <div
                    data-source-location='pages/Finance:145:18'
                    data-dynamic-content='true'
                    className='flex justify-between mb-3'
                  >
                    <label
                      data-source-location='pages/Finance:146:20'
                      data-dynamic-content='false'
                      className='text-sm font-medium text-slate-700'
                    >
                      Interest Rate (APR)
                    </label>
                    <span
                      data-source-location='pages/Finance:147:20'
                      data-dynamic-content='true'
                      className='text-lg font-bold text-blue-600'
                    >
                      {apr.toFixed(1)}%
                    </span>
                  </div>
                  <Slider
                    data-source-location='pages/Finance:149:18'
                    data-dynamic-content='false'
                    value={[apr]}
                    onValueChange={(value) => setApr(value[0])}
                    min={2}
                    max={20}
                    step={0.1}
                    className='w-full'
                  />
                </div>

                {/* Term */}
                <div
                  data-source-location='pages/Finance:160:16'
                  data-dynamic-content='true'
                >
                  <div
                    data-source-location='pages/Finance:161:18'
                    data-dynamic-content='true'
                    className='flex justify-between mb-3'
                  >
                    <label
                      data-source-location='pages/Finance:162:20'
                      data-dynamic-content='false'
                      className='text-sm font-medium text-slate-700'
                    >
                      Loan Term
                    </label>
                    <span
                      data-source-location='pages/Finance:163:20'
                      data-dynamic-content='true'
                      className='text-lg font-bold text-blue-600'
                    >
                      {term} months
                    </span>
                  </div>
                  <Slider
                    data-source-location='pages/Finance:165:18'
                    data-dynamic-content='false'
                    value={[term]}
                    onValueChange={(value) => setTerm(value[0])}
                    min={24}
                    max={84}
                    step={6}
                    className='w-full'
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div
              data-source-location='pages/Finance:178:12'
              data-dynamic-content='true'
            >
              <div
                data-source-location='pages/Finance:179:14'
                data-dynamic-content='true'
                className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white mb-6'
              >
                <h3
                  data-source-location='pages/Finance:180:16'
                  data-dynamic-content='false'
                  className='text-lg font-medium text-blue-100 mb-2'
                >
                  Estimated Monthly Payment
                </h3>
                <div
                  data-source-location='pages/Finance:181:16'
                  data-dynamic-content='true'
                  className='text-5xl font-bold mb-6'
                >
                  ${monthlyPayment.toFixed(0)}
                  <span
                    data-source-location='pages/Finance:182:46'
                    data-dynamic-content='false'
                    className='text-2xl'
                  >
                    /mo
                  </span>
                </div>
                <div
                  data-source-location='pages/Finance:184:16'
                  data-dynamic-content='true'
                  className='space-y-2 text-blue-100'
                >
                  <div
                    data-source-location='pages/Finance:185:18'
                    data-dynamic-content='true'
                    className='flex justify-between'
                  >
                    <span
                      data-source-location='pages/Finance:186:20'
                      data-dynamic-content='false'
                    >
                      Loan Amount:
                    </span>
                    <span
                      data-source-location='pages/Finance:187:20'
                      data-dynamic-content='true'
                      className='font-semibold'
                    >
                      ${principal.toLocaleString()}
                    </span>
                  </div>
                  <div
                    data-source-location='pages/Finance:189:18'
                    data-dynamic-content='true'
                    className='flex justify-between'
                  >
                    <span
                      data-source-location='pages/Finance:190:20'
                      data-dynamic-content='false'
                    >
                      Total Interest:
                    </span>
                    <span
                      data-source-location='pages/Finance:191:20'
                      data-dynamic-content='true'
                      className='font-semibold'
                    >
                      ${totalInterest.toFixed(0).toLocaleString()}
                    </span>
                  </div>
                  <div
                    data-source-location='pages/Finance:193:18'
                    data-dynamic-content='true'
                    className='flex justify-between border-t border-blue-500 pt-2'
                  >
                    <span
                      data-source-location='pages/Finance:194:20'
                      data-dynamic-content='false'
                    >
                      Total Paid:
                    </span>
                    <span
                      data-source-location='pages/Finance:195:20'
                      data-dynamic-content='true'
                      className='font-semibold'
                    >
                      ${totalPaid.toFixed(0).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div
                data-source-location='pages/Finance:200:14'
                data-dynamic-content='true'
                className='bg-white rounded-xl shadow-sm p-6'
              >
                <p
                  data-source-location='pages/Finance:201:16'
                  data-dynamic-content='false'
                  className='text-sm text-slate-600 mb-4'
                >
                  This is an estimate only. Your actual payment may vary based
                  on your credit score, down payment, and other factors.
                </p>
                <Link
                  data-source-location='pages/Finance:204:16'
                  data-dynamic-content='false'
                  to={createPageUrl('Contact')}
                >
                  <Button
                    data-source-location='pages/Finance:205:18'
                    data-dynamic-content='false'
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white'
                  >
                    Get Pre-Approved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Credit Tiers */}
        <div
          data-source-location='pages/Finance:215:8'
          data-dynamic-content='true'
          className='mb-16'
        >
          <div
            data-source-location='pages/Finance:216:10'
            data-dynamic-content='false'
            className='text-center mb-12'
          >
            <TrendingUp
              data-source-location='pages/Finance:217:12'
              data-dynamic-content='false'
              className='w-12 h-12 text-blue-600 mx-auto mb-4'
            />
            <h2
              data-source-location='pages/Finance:218:12'
              data-dynamic-content='false'
              className='text-3xl font-bold text-slate-900 mb-4'
            >
              Rates by Credit Tier
            </h2>
            <p
              data-source-location='pages/Finance:219:12'
              data-dynamic-content='false'
              className='text-lg text-slate-600 max-w-2xl mx-auto'
            >
              We offer competitive rates for all credit levels
            </p>
          </div>

          <div
            data-source-location='pages/Finance:224:10'
            data-dynamic-content='true'
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'
          >
            {creditTiers.map((tier, index) => (
              <motion.div
                data-source-location='pages/Finance:226:14'
                data-dynamic-content='true'
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'
              >
                <div
                  data-source-location='pages/Finance:234:16'
                  data-dynamic-content='true'
                  className='text-center'
                >
                  <div
                    data-source-location='pages/Finance:235:18'
                    data-dynamic-content='false'
                    className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'
                  >
                    <Shield
                      data-source-location='pages/Finance:236:20'
                      data-dynamic-content='false'
                      className='w-8 h-8 text-blue-600'
                    />
                  </div>
                  <h3
                    data-source-location='pages/Finance:238:18'
                    data-dynamic-content='true'
                    className='text-xl font-bold text-slate-900 mb-2'
                  >
                    {tier.title}
                  </h3>
                  <div
                    data-source-location='pages/Finance:239:18'
                    data-dynamic-content='true'
                    className='text-2xl font-bold text-blue-600 mb-2'
                  >
                    {tier.range}
                  </div>
                  <div
                    data-source-location='pages/Finance:240:18'
                    data-dynamic-content='true'
                    className='text-sm font-medium text-slate-700 mb-3'
                  >
                    {tier.apr}
                  </div>
                  <p
                    data-source-location='pages/Finance:241:18'
                    data-dynamic-content='true'
                    className='text-sm text-slate-600'
                  >
                    {tier.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div
          data-source-location='pages/Finance:249:8'
          data-dynamic-content='true'
          className='mb-16'
        >
          <div
            data-source-location='pages/Finance:250:10'
            data-dynamic-content='true'
            className='bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-white'
          >
            <div
              data-source-location='pages/Finance:251:12'
              data-dynamic-content='true'
              className='max-w-4xl mx-auto'
            >
              <h2
                data-source-location='pages/Finance:252:14'
                data-dynamic-content='false'
                className='text-3xl font-bold mb-8 text-center'
              >
                Why Finance with Summit Motors?
              </h2>
              <div
                data-source-location='pages/Finance:253:14'
                data-dynamic-content='true'
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
              >
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
                  <div
                    data-source-location='pages/Finance:264:18'
                    data-dynamic-content='true'
                    key={index}
                    className='flex items-center gap-3'
                  >
                    <CheckCircle
                      data-source-location='pages/Finance:265:20'
                      data-dynamic-content='false'
                      className='w-6 h-6 text-green-400 flex-shrink-0'
                    />
                    <span
                      data-source-location='pages/Finance:266:20'
                      data-dynamic-content='true'
                      className='text-slate-100'
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div
          data-source-location='pages/Finance:275:8'
          data-dynamic-content='true'
        >
          <div
            data-source-location='pages/Finance:276:10'
            data-dynamic-content='false'
            className='text-center mb-12'
          >
            <HelpCircle
              data-source-location='pages/Finance:277:12'
              data-dynamic-content='false'
              className='w-12 h-12 text-blue-600 mx-auto mb-4'
            />
            <h2
              data-source-location='pages/Finance:278:12'
              data-dynamic-content='false'
              className='text-3xl font-bold text-slate-900 mb-4'
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div
            data-source-location='pages/Finance:281:10'
            data-dynamic-content='true'
            className='max-w-3xl mx-auto space-y-4'
          >
            {faqs.map((faq, index) => (
              <div
                data-source-location='pages/Finance:283:14'
                data-dynamic-content='true'
                key={index}
                className='bg-white rounded-xl shadow-sm p-6'
              >
                <h3
                  data-source-location='pages/Finance:284:16'
                  data-dynamic-content='true'
                  className='text-lg font-semibold text-slate-900 mb-2'
                >
                  {faq.question}
                </h3>
                <p
                  data-source-location='pages/Finance:285:16'
                  data-dynamic-content='true'
                  className='text-slate-600'
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
