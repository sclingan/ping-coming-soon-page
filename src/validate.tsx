

export default function validateForm(e: any) {
    e.preventDefault();
    const warning = document.getElementById('error-warning');
    const email = document.getElementById('email');
    let x = true;
    if(x === true) {
        warning?.classList.remove('sr-only');
        warning?.classList.add('error');
        email?.classList.add('input-error');
    }
}