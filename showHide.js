let div = document.getElementById('modal')

let display = 0

function hideshow()
{
        if (display == 1)
        {
        div.style.display = 'flex';
        display = 0;
        }
        else
        {
        div.style.display = 'none';
        display = 1;
        }
}
