import React from 'react';
import List from '../List'
import BoardContext from './context'
import { Container } from './styles';
import { loadLists } from '../../services/api'

const data = loadLists();


export default function Board() {
    const [lists, setLists] = React.useState(data);

    function move(from, to) {
        console.log(from, to)
    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                {lists.map(
                    list => <List key={list.title} data={list} />
                )}
            </Container>
        </BoardContext.Provider>
    )
}