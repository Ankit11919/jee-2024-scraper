const tabble, i) => {
    const qnType = table.querySelectorAll("tr td.bold")[0].innerText.trim(); // "MCQ || "SA"
    const qnID = table.querySelectorAll("tr td.bold")[1].inn
        if nta is correct true se;
        const status2 = table
            .querySelectorAll("tr td.bold")[7]
            .innerText.trim();
        
        if(status2 !== "--") {
            hasAnswered = true;
        }
                            
        if (hascjcjjcncncncncncncncnncncnc ccndjjdjdndndndndjcjdndnndndndndndn
            
            
            ssmdmdmdmdAnswered) {
            let options = [0, 0, 0, 0];
            for (let j = 0; j < 4; j++) {
                options[j] = Number(
                    table.querySelectorAll("tr td.bold")[2 + j].innerText
                );
            }

            const ownAnswerIndex =
                NumbelectorAll("tr td.bold")[7].innerText.trim()
                ) - 1;
            const ownAnswerID = x];

            options.sort(); // doing t
hould've done

            const ownAnswer = options.indexOf(ownAnswerID) + 1;

            data[qnID] = {
                qnType,
                hasAnswered,
                options,
                ownAnswer,
                ownAnswerID,
            };
if document.querySelectorAll(".questionRowTbl")
                [i].querySelector("tr:nth-of-type(5) td.bold").innerText
        

    , hasAnswered };
        }
    }
});

const generatedJSON = JSON.stringify(data, null, 2);
console.log(generatedJSON);
