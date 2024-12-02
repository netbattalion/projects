
function loop(p) {
    let menu = `<ul>
`;
    let link = '';
    let sub0 = '';
    p.map((v) => {
        sub0 = ' ./ ' + v.title + ' / ';
        // link += sub0 + '######';
        // menu += `<li>${sub}</li>
        // `

        menu += `
<li>    ${sub0}`;
        console.log(sub0);
        if (v.children) {
            menu += `
<BBB>
`;
            v.children.map((v) => {
                let sub1 = sub0 + v.title + ' / ';
                link += sub1;
                menu += `
<li>    ${sub1}`;
                console.log(sub1);

                if (v.children) {
                    menu += `
<CCC>

`;
                    v.children.map((v) => {
                        let sub2 = sub1 + v.title + ' / ';
                        link += sub2;
                        menu += `<li>    ${sub2}`;
                        console.log(sub2);
                        if (v.children) {
                        } else {
                            menu += `</li>
`;
                        }
                    });
                    menu += `        </CCC>
</li>
`;
                } else {
                    menu += `</li>
    `;
                    // link += '----</li>'
                }
            });
            menu += `
</BBB>
</li>

`;
        } else {
            menu += `</li>
`;
        }
    });
    menu += `</ul>
`;

    console.log('.....');
    console.log(menu);
}