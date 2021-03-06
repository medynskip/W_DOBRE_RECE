import React from 'react';

export default () => {

    const columns = [{
        number: 10,
        header: 'ODDANYCH WORKÓW',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at diam id purus vehicula ultrices id et mi. Morbi pretium a ipsum sed laoreet.'
    }, {
        number: 5,
        header: 'WSPARTYCH ORGANIZACJI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at diam id purus vehicula ultrices id et mi. Morbi pretium a ipsum sed laoreet.'
    }, {
        number: 7,
        header: 'ZORGANIZOWANYCH ZBIÓREK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at diam id purus vehicula ultrices id et mi. Morbi pretium a ipsum sed laoreet.'
    }]

    return (

        <div className="home-columns" id="columns">
            <div className="container">
                <div className="row">
                    {columns.map((el, i) => {
                        return (<div className="col-4" key={i}>
                            <span>{el.number}</span>
                            <span>{el.header}</span>
                            <span>{el.description}</span>
                        </div>)
                    })}
                </div>
            </div>
        </div>

    )
}