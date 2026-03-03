import type { ReactNode } from "react";

type Column = {
    header: string;
    render: (value: any) => ReactNode
};

type TableProps = {
    data: any[]
    columns: Column[]
};

const Table = ({ data,columns}: TableProps) => {
    return (
        <div className="w-full shadow-xs rounded-2xl border border-neutral-200 bg-white overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="text-sm text-body border-b border-neutral-200">
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index} className="px-3 md:px-6 py-3 font-semibold text-nowrap">
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value, index) => (
                            <tr key={index} className="border-b last:border-b-0 border-neutral-200">
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className="px-3 md:px-6 py-4">
                                        {col.render(value)}
                                    </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;