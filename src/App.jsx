import React, { useCallback, useState } from 'react'
import { _App } from './App.module.css'
import { generateData } from './__test_data.js'
import { throttle } from './schedule.js'

const TEST_DATA_COUNT = 50_000

const TD_WIDTH = 250
const TABLE_WIDTH = TEST_DATA_COUNT * TD_WIDTH
const RENDER_COUNT = 20

const __test_data = generateData(TEST_DATA_COUNT)

function DataRow(props) {
    const start = props.start
    const tdList = []
    for (let i = start; i < start + RENDER_COUNT; i++) {
        const it = __test_data[i]
        if (!it) {
            continue
        }
        tdList.push(
            <td key={it}>
                <p>{it}</p><p>{it}</p><p>{it}</p><p>{it}</p><p>{it}</p>
                <p>{it}</p><p>{it}</p><p>{it}</p><p>{it}</p><p>{it}</p>
            </td>
        )
    }
    return (
        <tr>{tdList}</tr>
    )
}

export default function (props) {
    const [scrollLeft, setScrollLeft] = useState(0)

    const handleScroll = useCallback(throttle((ev) => {
        setScrollLeft(ev.target.scrollLeft)
    }, 200), [])

    const passedCount = Math.trunc(scrollLeft / TD_WIDTH)
    const tableStyle = { width: TABLE_WIDTH + 'px', paddingLeft: (passedCount * TD_WIDTH) + 'px', }

    return (
        <div className={_App} onScroll={handleScroll}>
            <table style={tableStyle}>
                <tbody>
                <DataRow start={passedCount}/>
                </tbody>
            </table>
        </div>
    )
}