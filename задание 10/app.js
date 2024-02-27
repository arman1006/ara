const calculateGrade = () => {
    const phoneCount = parseInt(document.querySelector("#phoneCount").value);
    const phonePrice = parseInt(document.querySelector("#phonePrice").value);

    const notebookCount = parseInt(document.querySelector("#notebookCount").value);
    const notebookPrice = parseInt(document.querySelector("#notebookPrice").value);

    const pashtetCount = parseInt(document.querySelector("#pashtetCount").value);
    const pashtetPrice = parseInt(document.querySelector("#pashtetPrice").value);


    if (isNaN(phonePrice) || isNaN(notebookPrice) || isNaN(pashtetPrice)) {
        alert("Заполните поле!")
    } else if (phonePrice === 0 || notebookPrice === 0 || pashtetPrice === 0) {
        alert("Цена не может равняться нулю");
    }
    
    
    else {
            let result = (phoneCount * phonePrice) + (notebookCount * notebookPrice) + (pashtetCount * pashtetPrice)
            
                    const resultDiv = document.querySelector("#result");
        resultDiv.innerHTML = `
        <p>Общая стоимость за всё: ${result}%<p>
        `;
        };
    }

