import Link from 'next/link';

export default function Home() {
  return (
    <main className='min-h-screen bg-white'>
      {/* Hero */}
      <section className='relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-blue-900'>
        <div className='absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent' />
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-white'>
              Your next vehicle, made simple
            </h1>
            <p className='mt-4 md:mt-6 text-lg md:text-xl text-slate-200 max-w-2xl'>
              Browse our curated inventory, get tailored financing, and enjoy a
              transparent buying experience from start to finish.
            </p>
            <div className='mt-8 flex flex-wrap items-center gap-3'>
              <Link
                href='/inventory'
                className='inline-flex items-center rounded-md bg-white px-5 py-3 text-slate-900 text-sm font-semibold shadow-sm hover:bg-slate-100'
              >
                Browse Inventory
              </Link>
              <Link
                href='/contact'
                className='inline-flex items-center rounded-md border border-white/30 px-5 py-3 text-white text-sm font-semibold hover:bg-white/10'
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className='py-12 md:py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <Link
              href='/about'
              className='group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow'
            >
              <h3 className='text-lg font-semibold text-slate-900 group-hover:text-blue-700'>
                About
              </h3>
              <p className='mt-1 text-sm text-slate-600'>
                Learn what sets us apart and how we serve our customers.
              </p>
            </Link>
            <Link
              href='/finance'
              className='group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow'
            >
              <h3 className='text-lg font-semibold text-slate-900 group-hover:text-blue-700'>
                Finance
              </h3>
              <p className='mt-1 text-sm text-slate-600'>
                Explore flexible terms and competitive rates.
              </p>
            </Link>
            <Link
              href='/gallery'
              className='group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow'
            >
              <h3 className='text-lg font-semibold text-slate-900 group-hover:text-blue-700'>
                Gallery
              </h3>
              <p className='mt-1 text-sm text-slate-600'>
                See our showroom, deliveries, and body shop transformations.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Secondary links */}
      <section className='pb-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Link
              href='/autoBody'
              className='group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow'
            >
              <h3 className='text-lg font-semibold text-slate-900 group-hover:text-blue-700'>
                Auto Body
              </h3>
              <p className='mt-1 text-sm text-slate-600'>
                From estimates to full restorations—expert collision repair.
              </p>
            </Link>
            <Link
              href='/vehicles/1'
              className='group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow'
            >
              <h3 className='text-lg font-semibold text-slate-900 group-hover:text-blue-700'>
                Featured Vehicle
              </h3>
              <p className='mt-1 text-sm text-slate-600'>
                Take a closer look at one of our featured models.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
