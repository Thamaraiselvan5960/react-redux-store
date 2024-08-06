import React, { useMemo, useState } from "react";
// import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
// import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
ModuleRegistry.registerModules([ClientSideRowModelModule]);

export const AgGridTable = () => {
	// Row Data: The data to be displayed.
	const [rowData, setRowData] = useState([
		{ make: "Tesla", model: "Model Y", price: 64950, electric: true },
		{ make: "Ford", model: "F-Series", price: 33850, electric: false },
		{ make: "Toyota", model: "Corolla", price: 29600, electric: false },
	]);

	// Column Definitions: Defines the columns to be displayed.
	const [colDefs, setColDefs] = useState([]);

	const defaultColDef = useMemo(() => {
		return {
			flex: 1,
			filter: true,
			floatingFilter: true,
			editable: true,
		}
	})

	const gridOptions = {
		columnDefs: [
			{
				field: "make",
				headerName: 'Company',
				valueGetter: p => p.data.make + ' ' + p.data.price,
				cellEditor: 'agSelectCellEditor',
				cellEditorParams: { values: ['Tesla', 'Ford', 'Toyota'] },
				checkboxSelection: true,
			},
			{ field: "model" },
			{ field: "price", valueFormatter: p => "€ " + p.value.toLocaleString() },
			{ field: "electric" },
		],
		suppressRowGroupingColumns: true, // Add this property
	};

	return (
		// wrapping container with theme & size
		<div
			className="ag-theme-quartz" // applying the Data Grid theme
			style={{ height: 500, width: '100%' }} // the Data Grid will fill the size of the parent container
		>
			<AgGridReact
				rowData={rowData}
				gridOptions={gridOptions}
				defaultColDef={defaultColDef}
				rowSelection={"multiple"}
				pagination={true}
				paginationPageSize={10}
				paginationPageSizeSelector={[10, 20]}
			/>
		</div>
	);
};
