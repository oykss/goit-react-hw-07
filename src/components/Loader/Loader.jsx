import { TailSpin } from 'react-loader-spinner';

export default function Loader() {
  return (
    <TailSpin
      visible={true}
      height="60"
      width="60"
      color="#fff"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px',
      }}
    />
  );
}
