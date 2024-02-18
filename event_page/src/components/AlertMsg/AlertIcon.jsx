function AlertIcon({ fill, size }) {
    return (
        <svg fill={fill} width={size} height={size} viewBox="-0.1 -0.1 1.2 1.2" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" className="jam jam-alert">
            <path d="M0.5 1C0.224 1 0 0.776 0 0.5S0.224 0 0.5 0s0.5 0.224 0.5 0.5 -0.224 0.5 -0.5 0.5m0 -0.1a0.4 0.4 0 1 0 0 -0.8 0.4 0.4 0 0 0 0 0.8m0 -0.65a0.05 0.05 0 0 1 0.05 0.05v0.25a0.05 0.05 0 0 1 -0.1 0V0.3a0.05 0.05 0 0 1 0.05 -0.05m0 0.5a0.05 0.05 0 1 1 0 -0.1 0.05 0.05 0 0 1 0 0.1" />
        </svg>
    );
}

export default AlertIcon;
