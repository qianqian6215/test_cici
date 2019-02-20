import * as React from "react";
import ContentLoader from 'rn-content-loader';
import {Circle, Rect} from "react-native-svg";

export class TestLoader extends React.Component{

    render(): React.ReactNode {
        return <ContentLoader height={300} width={800}>
            <Circle cx="30" cy="30" r="30" />
            <Rect x="75" y="13" rx="4" ry="4" width="100" height="13" />
            <Rect x="75" y="37" rx="4" ry="4" width="50" height="8" />
            <Rect x="0" y="70" rx="5" ry="5" width="800" height="200" />
        </ContentLoader>
    }

}
