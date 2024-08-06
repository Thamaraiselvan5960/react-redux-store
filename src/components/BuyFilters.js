import { Divider, Typography } from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { RangeFilter } from "./RangeFilter";
import * as Yup from 'yup';
import { Checkbox } from "./Checkbox";



export const BuyFilters = () => {
	const [filters, setFilters] = useState({
		houses: false,
		apartments: false,
		plots: false,
	});

	const handleFilterChange = (filter) => {
		setFilters((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
	};

	return (

		<>
			<Typography variant="subtitle1">Real estate Type</Typography>
			{Object.keys(filters).map((filter) => (
				<Checkbox
					key={filter}
					value={filter}
					onChange={() => handleFilterChange(filter)}
					checked={filters[filter]}
				/>
			))}
			<Divider />

			<Formik
				initialValues={{
					priceRange: { min: '', max: '' },
					sizeRange: { min: '', max: '' },
					weightRange: { min: '', max: '' },
				}}
				validationSchema={Yup.object().shape({
					priceRange: Yup.object().shape({
						min: Yup.number().required('Minimum price is required'),
						max: Yup.number().required('Maximum price is required'),
					}),
					sizeRange: Yup.object().shape({
						min: Yup.number().required('Minimum size is required'),
						max: Yup.number().required('Maximum size is required'),
					}),
					weightRange: Yup.object().shape({
						min: Yup.number().required('Minimum weight is required'),
						max: Yup.number().required('Maximum weight is required'),
					}),
				})}
			>
				{(formik) => (
					<Form>
						<RangeFilter
							label="Price Range"
							minPlaceholder="min"
							maxPlaceholder="max"
							name="priceRange"
						/>
						<Divider />
						<RangeFilter
							label="Size Range"
							minPlaceholder="Min"
							maxPlaceholder="Max"
							name="sizeRange"
						/>
						<Divider />
						<RangeFilter
							label="Weight Range"
							minPlaceholder="Min"
							maxPlaceholder="Max"
							name="weightRange"
						/>
					</Form>
				)}
			</Formik>
		</>
	)
}
