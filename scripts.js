const Modal = {
    open() {
        // Abre o modal
        // Adicionar a class active ao modal
        document.querySelector('.modal-overlay')
            .classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay')
            .classList.remove('active')

    }
}

const transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021'
},

{
    id: 2,
    description: 'Criação Website',
    amount: 500000,
    date: '23/01/2021'
},

{
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '23/01/2021'
},

{
    id: 4,
    description: 'z',
    amount: -5,
},
]

const Transaction = {
    incomes() {
        // Somar as entradas

    },
    expenses() {
        // Somas as saídas


    },
    total() {
        // Entradas - Saídas


    }
}

const DOM = {
    innerHTMLTransaction() {

        const html = `
        <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
              <img src="assets/minus.svg" alt="Remover Transação">
            </td>
          </tr>
        `

    }


}