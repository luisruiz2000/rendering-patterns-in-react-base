import { useState } from "react";

interface ParenComponentProps {
    render: (data: string[]) => React.ReactNode 
}


const ParentComponent: React.FC<ParenComponentProps> = ({ render }) => {
    const [data] = useState<string[]>(['Apple', 'Banana', 'Orange'])

    return <ul>{ render(data) }</ul>
};

export default ParentComponent;