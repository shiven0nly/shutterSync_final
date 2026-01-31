import Spline from '@splinetool/react-spline';

function SplineRobot({ className = '', style = {} }) {
    return (
        <div className={className} style={style}>
            <Spline
                scene="https://prod.spline.design/AnMOIqYNDXTEYyeB/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

export default SplineRobot;