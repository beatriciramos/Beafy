import React from 'react';
import { useDrag } from 'react-dnd'
import { Container, Label } from './styles';

export default function Card({ data }) {
    const [{ isDragging }, drag] = useDrag({
        item: {
            type: "CARD",
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    return (
        <Container ref={drag} >
            <header>
                {data.labels.map(label => <Label key={label} color={label} />)}
            </header>
            <p> {data.content}</p>
            {data.user && <img src={data.user} alt='' />}
        </Container>
    )
}