import React from 'react';

const Table = () => {
    // Sample data
    const data = [
        { a: 'A1', b: 'B1', c: 'C1', d: 'D1', e: 'E1', f: 'F1', g: 'G1' },
        { a: 'A2', b: 'B2', c: 'C2', d: 'D2', e: 'E2', f: 'F2', g: 'G2' },
        { a: 'A3', b: 'B3', c: 'C3', d: 'D3', e: 'E3', f: 'F3', g: 'G3' },
        { a: 'A4', b: 'B4', c: 'C4', d: 'D4', e: 'E4', f: 'F4', g: 'G4' },
        { a: 'A5', b: 'B5', c: 'C5', d: 'D5', e: 'E5', f: 'F5', g: 'G5' },
        { a: 'A6', b: 'B6', c: 'C6', d: 'D6', e: 'E6', f: 'F6', g: 'G6' },
    ];

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">a</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">b</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">c</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">d</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">e</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">f</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">g</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{row.a}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.b}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.c}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.d}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.e}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.f}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{row.g}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
