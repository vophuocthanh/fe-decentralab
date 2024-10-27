import banner from '../assets/banner.png';
import {
  IconClaimDaily,
  IconEarnRebates,
  IconHowWork,
  IconReferral,
  IconTwoLevel,
} from '../assets/icon';
import BoxSection from './box-section';

export default function DashboardMain() {
  return (
    <div className='bg-[#0B0E18] flex flex-col h-full min-h-screen w-full text-white'>
      <div className='flex flex-col md:flex-row bg-[#101423] justify-between items-center h-auto md:h-[279px] p-4 sm:p-6 md:px-10 py-6'>
        <div className='flex flex-col w-full md:w-[441px] space-y-3 text-center md:text-left'>
          <h1 className='text-lg md:text-2xl font-bold'>
            Unlock Rewards with the Copin Referral Program
          </h1>
          <div className='flex flex-col'>
            <p className='text-[#C0C0C9] text-sm md:text-base'>
              Earn rebates and commissions by inviting friends.
            </p>
            <p className='text-[#C0C0C9] text-sm md:text-base'>
              Grow your network and benefit from our 6-tier reward system.
            </p>
          </div>
          <div className='flex gap-2 items-center justify-center md:justify-start text-[#97CFFD] hover:scale-105 hover:transition-all'>
            <p className='text-sm md:text-base font-semibold'>
              View referral Ranking
            </p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-5 h-5 md:w-6 md:h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              />
            </svg>
          </div>
        </div>
        <div className='w-full md:w-auto h-auto sm:h-[248.23px] mb-6 sm:flex sm:justify-center sm:items-center'>
          <img
            src={banner}
            alt='banner'
            className='object-cover mx-auto max-w-full h-auto rounded-md'
          />
        </div>
      </div>
      <div className='p-4 sm:p-6 w-full'>
        <div className='flex flex-col space-y-4'>
          <div className='flex items-center gap-2'>
            <IconHowWork />
            <h1 className='leading-6 font-medium text-base md:text-lg'>
              How It Works
            </h1>
          </div>
          <div className='grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center w-full'>
            <BoxSection
              icon={<IconTwoLevel />}
              title='1. Two-Level Referral System'
              description='Invite friends and earn from two levels: F1 (your referrals) and F2 (their referrals)'
            />
            <BoxSection
              icon={<IconEarnRebates />}
              title='2. Earn Rebates & Commissions'
              description='Earn rebates on your trades and commissions from F1 and F2.'
            />
            <BoxSection
              icon={<IconClaimDaily />}
              title='3. Claim Daily Rewards'
              description='Rewards are credited after trades close and claimable daily at 0:00 UTC.'
            />
            <BoxSection
              icon={<IconReferral />}
              title='4. Referral Tier System'
              description='Your tier is based on total fees paid by F0, F1, and F2 over the last 30 days'
            />
          </div>
        </div>
        <footer className='bg-[#101423] h-32 md:h-52 flex flex-col justify-center items-center p-4 sm:p-6 text-center'>
          <h1 className='font-bold text-sm md:text-base leading-6'>
            Apply <span className='gradient-text'>Copin Affiliate Program</span>{' '}
            to get <br className='hidden md:block' /> more benefits!
          </h1>
          <button className='gradient-text text-sm mt-2'>Contact us</button>
        </footer>
      </div>
    </div>
  );
}
