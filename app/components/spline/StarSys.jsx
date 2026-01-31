import Spline from '@splinetool/react-spline';

export default function StarSys({ className = '', style = {} }) {
  return (
    <div className={className} style={{ width: '100%', height: '100%', ...style }}>
      <Spline
        scene="https://prod.spline.design/FSUNBdAkPDRi3fP3/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
