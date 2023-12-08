import Link from 'next/link';

import styles from './register.module.css';

import AuthHeader from '../../component/auth/header';


const ConnectWallet = () => {
  return (
    <main className={styles.main}>
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <AuthHeader
          title={'Connect your wallet to get Started!'}
          description={''}
        />
        
      </section>
    </main>
  );
};

export default ConnectWallet;
