// 1. Consultar quartos que possuem banheira
db.quartos.find({
    "caracteristicas.banheira": true
});
// Resultado esperado: quarto 202 (Luxo) possui banheira.
// Consulta validada no MongoDB Compass.

// 2. Identificar hóspedes que fizeram mais de uma reserva
db.reservas.aggregate([
    {
        $group: {
            _id: "$hospede_id",
            total_reservas: { $sum: 1 }
        }
    },
    {
        $match: {
            total_reservas: { $gt: 1 }
        }
    }
]);
// Resultado: hsp001 possui 8 reservas e hsp002 possui 5.
// Consulta validada no MongoDB Compass.

// 3. Calcular o faturamento previsto por mês
db.reservas.aggregate([
    {
        $group: {
            _id: {
                mes: { $month: "$data_checkin" },
                ano: { $year: "$data_checkin" }
            },
            total_reservas: { $sum: 1 },
            faturamento: { $sum: "$valor_total" }
        }
    },
    {
        $sort: {
            "_id.ano": 1,
            "_id.mes": 1
        }
    }
]);
// Resultado:
// Novembro/2026: 8 reservas — R$ 5.300
// Dezembro/2026: 5 reservas — R$ 3.010
// Total previsto: R$ 8.310
// Consulta validada no MongoDB Compass.

