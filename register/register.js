// register.js
import { participantTemplate, successTemplate } from './templates.js';

document.addEventListener('DOMContentLoaded', () => {
    let participantCount = 1;
  
    document.getElementById('add').addEventListener('click', () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        document.getElementById('add').insertAdjacentHTML('beforebegin', newParticipantHTML);
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', submitForm);

    function submitForm(event) {
        event.preventDefault();
        const fees = totalFees();
        const name = document.getElementById('adult_name').value;
        const participantCount = document.querySelectorAll('[id^=fee]').length;

        const info = {
            name: name,
            participants: participantCount,
            fees: fees
        };

        const summary = document.getElementById('summary');
        summary.innerHTML = successTemplate(info);
        form.style.display = 'none';
        summary.style.display = 'block';
    }

    function totalFees() {
        let feeElements = document.querySelectorAll('[id^=fee]');
        feeElements = [...feeElements];
        const total = feeElements.reduce((acc, input) => acc + parseFloat(input.value || 0), 0);
        return total;
    }
});
