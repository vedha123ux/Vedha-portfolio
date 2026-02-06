declare module '@splinetool/react-spline' {
    import { CSSProperties, ReactNode } from 'react';

    export interface SplineProps {
        scene: string;
        style?: CSSProperties;
        onLoad?: (spline: any) => void;
        onMouseDown?: (e: any) => void;
        className?: string;
    }

    export default function Spline(props: SplineProps): JSX.Element;
}
