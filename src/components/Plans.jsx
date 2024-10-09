import React, { useState } from "react";
import "../styles/plans.css"; // Aquí agregas tu CSS personalizado

const PlanSection = () => {
	const plans = [
		{
			id: 1,
			name: "Gold Standard Presencial",
			duration: "30 Días",
			discount: "60% OFF",
			training1: "Diseño de Entrenamiento:",
			training2: "30 Días",
			nutrition1: "Timing Nutricional:",
			nutrition2: "30 Días",
			reports1: "Informes:",
			reports2: "Semanal",
			bonus: [
				"Comunicación Directa via Chat + Llamada",
				"Recetas",
				"Snacks Fitness",
				"Tests Físicos",
				"Antropometría",
				"Somatocarta",
			],
			annualPrice: "$5'540.000 COP",
			discountedAnnualPrice: "$2'216.000 COP",
			monthlyPrice: "$1'940.000 COP",
			discountedMonthlyPrice: "$776.000 COP",
			buttonText: "Lo Quiero!",
			buttonColor: "yellow",
			borderColor: "var(--gradien-GoldStandardPresencial) 1",
		},
		{
			id: 2,
			name: "Gold Standard Online",
			duration: "24 Días",
			discount: "50% OFF",
			training1: "Diseño de Entrenamiento:",
			training2: "24 Días",
			nutrition1: "Timing Nutricional:",
			nutrition2: "24 Días",
			reports1: "Informes:",
			reports2: "Quincenal",
			bonus: [
				"Consultas via Chat + Llamada",
				"Recetas",
				"Snacks Fitness",
			],
			trimestralPrice: "$3'324.000 COP",
			discountedTrimestralPrice: "$1'662.000 COP",
			monthlyPrice: "$1'164.000 COP",
			discountedMonthlyPrice: "$582.000 COP",
			buttonText: "Lo Quiero!",
			buttonColor: "blue",
			borderColor: "var(--gradient-GoldStandardOnline) 1",

		},
		{
			id: 3,
			name: "Premium Basic",
			duration: "24 Días",
			discount: "40% OFF",
			training1: "Diseño de Entrenamiento:",
			training2: "20 Días",
			nutrition1: "Timing Nutricional:",
			nutrition2: "20 Días",
			reports1: "Informes:",
			reports2: "Mensual",
			bonus: ["Consultas via Chat"],
			trimestralPrice: "$1'108.000 COP",
			discountedTrimestralPrice: "$664.800 COP",
			monthlyPrice: "$388.000 COP",
			discountedMonthlyPrice: "$232.800 COP",
			buttonText: "Lo Quiero!",
			buttonColor: "purple",
			borderColor: "var(--gradient-PremiumBasic) 1",
		},
	];

	const [selectedPlan, setSelectedPlan] = useState(plans[0]); // Empieza con el primer plan seleccionado

	return (
		<div className="plan-section">
			<div className="plan-options">
				{plans.map((plan, index) => (
					<button
						key={index}
						onClick={() => setSelectedPlan(plan)}
						className={
							selectedPlan.id === plan.id ? "active-plan" : ""
						}
					>
						{plan.name}
					</button>
				))}
			</div>

			<div className="plan-details" style={{ borderImage: selectedPlan.borderColor }}>
				<p className="discount-percentage">{selectedPlan.discount}</p>
				<div className="training">
					<p>{selectedPlan.training1}</p>
					<p>{selectedPlan.training2}</p>
				</div>
				<div className="nutrition">
					<p>{selectedPlan.nutrition1}</p>
					<p>{selectedPlan.nutrition2}</p>
				</div>
				<div className="reports">
					<p>{selectedPlan.reports1}</p>
					<p>{selectedPlan.reports2}</p>
				</div>
				<div className="bonus">
					<h4>BONUS</h4>
					<div className="line_separation"></div>
					<ul>
						{selectedPlan.bonus.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</div>
				<div className="plan-prices">
					{selectedPlan.annualPrice && (
						<div>
							<p>Plan Anual: </p>
							<p className="discount">{selectedPlan.annualPrice}</p>
							<p>
								{selectedPlan.discountedAnnualPrice}
							</p>
						</div>
					)}
					{selectedPlan.trimestralPrice && (
						<div>
							<p>Plan Trimestral: </p>
							<p className="discount">
								{selectedPlan.trimestralPrice}
							</p>
							<p>
								{selectedPlan.discountedTrimestralPrice}
							</p>
						</div>
					)}	
					<div>
						<p>Plan Mensual: </p>
						<p className="discount">{selectedPlan.monthlyPrice}</p>
						<p>{selectedPlan.discountedMonthlyPrice}</p>
					</div>
				</div>
				<button
					style={{ backgroundColor: selectedPlan.buttonColor }}
					className="plan-button"
				>
					{selectedPlan.buttonText}
				</button>
			</div>
		</div>
	);
};

export default PlanSection;
