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
			backgraundColor: "var(--gradien-GoldStandardPresencial)",
			messageWhatsapp1: `¡Hola! Estoy interesado en el plan *Gold Standard Presencial* con 60% de descuento.%0A%0AMe gustaría saber más sobre el precio anual de *$2'216.000 COP*`,
			messageWhatsapp2: `¡Hola! Estoy interesado en el plan *Gold Standard Presencial* con 60% de descuento.%0A%0AMe gustaría saber más sobre el precio mensual de *$776.000 COP*`
			
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
			backgraundColor: "var(--gradient-GoldStandardOnline)",
			messageWhatsapp1: `¡Hola! Estoy interesado en el plan *Gold Standard Online* con 50% de descuento.%0A%0AMe gustaría saber más sobre el precio trimestral de *$1'662.000 COP*`,
			messageWhatsapp2: `¡Hola! Estoy interesado en el plan *Gold Standard Online* con 50% de descuento.%0A%0AMe gustaría saber más sobre el precio mensual de *$582.000 COP*`
			
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
			backgraundColor: "var(--gradient-PremiumBasic)",
			messageWhatsapp1: `¡Hola! Estoy interesado en el plan *Premium Basic* con 40% de descuento.%0A%0AMe gustaría saber más sobre el precio trimestal de *$664.000 COP*`,
			messageWhatsapp2: `¡Hola! Estoy interesado en el plan *Premium Basic* con 40% de descuento.%0A%0AMe gustaría saber más sobre el precio mensual de *$232.800 COP*`
			
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
							selectedPlan.id === plan.id
								? "active-plan" : ""
						}
						style={
							selectedPlan.id === plan.id
								? { background: selectedPlan.backgraundColor } // Estilo en línea cuando está activo
								: {}
						}
					>
						<p className="plan-option-title">{plan.name}</p><p>24 días</p>
					</button>
				))}
			</div>

			<div className="plan-details" style={{ borderImage: selectedPlan.borderColor }}>
				<p className="discount-percentage">{selectedPlan.discount}</p>
				<div className="training plan-inf">
					<p>{selectedPlan.training1}</p>
					<p>{selectedPlan.training2}</p>
				</div>
				<div className="nutrition plan-inf">
					<p>{selectedPlan.nutrition1}</p>
					<p>{selectedPlan.nutrition2}</p>
				</div>
				<div className="reports plan-inf">
					<p>{selectedPlan.reports1}</p>
					<p>{selectedPlan.reports2}</p>
				</div>
				<div className="bonus">
					<h4>BONUS</h4>
					<div className="line_separation"></div>
					<ul>
						{selectedPlan.bonus.map((item, i) => (
							<li key={i}>・{item}</li>
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
				<a
					className="plan-button1"
					style={{ background: selectedPlan.backgraundColor }}
					href={`https://api.whatsapp.com/send?phone=3112964443&text=${selectedPlan.messageWhatsapp1}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{selectedPlan.buttonText}
				</a>
				<a
					className="plan-button2"
					href={`https://api.whatsapp.com/send?phone=3112964443&text=${selectedPlan.messageWhatsapp2}`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{selectedPlan.buttonText}
				</a>
			</div>
		</div>
	);
};

export default PlanSection;
