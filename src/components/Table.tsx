import type React from "react";
import type { ReactNode } from "react";

type Column<T> = {
    header: string;
    render: (value: T) => ReactNode
};

type TableProps<T> = {
    data: T[]
    columns: Column<T>[]
};

const Table = <T,>({ data,columns}: TableProps<T>) : React.JSX.Element=> {
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