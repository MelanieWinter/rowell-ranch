import './Logo.css';

export default function Logo({ size }) {
    return (
        <img src="./assets/logo.png" alt="" className={`Logo ${size}`} />
    );
}