
export default function validateForm(e: any) {
    e.preventDefault();
    const warning = document.getElementById('error-warning');
    const email : HTMLInputElement | null = document.querySelector<HTMLInputElement>('input[type="email"]')!;
    const thankYou = document.getElementById('email-added');

    // Warning! This is just to test client side, use a server side validation!
    const regex1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const answer : boolean = regex1.test(email.value);

    if(answer) {
        // Remove error warnings and
        // add a thank you paragraph to confirm
        warning?.classList.remove('error');
        warning?.classList.add('sr-only');
        email?.classList.remove('input-error');
        email.value = '';
        thankYou?.classList.remove('sr-only');
        thankYou?.classList.add('email-added');

    }else {
        // Add error warnings for non-valid email
        warning?.classList.remove('sr-only');
        warning?.classList.add('error');
        email?.classList.add('input-error');
    }
}