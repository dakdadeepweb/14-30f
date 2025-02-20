// Dados dos alunos e professores (sem pontos nos nomes)
const alunos = {
    rosiearegold279: '123456789Ros@',
    Kanecfcbfr: '123456789Kan@',
    miraculizado: '123456789Mir@',
    Mathspa: '123456789Mat@',
    tensosinho_str: '123456789Ten@',
    Ked0_0: '123456789Ked@',
    jonybee74049: '123456789Jon@',
    Ayu03212: '123456789Ayu@',
    phelixcoisinho: '123456789Phe@',
    cf_elisa9908545: '123456789Cf_@',
    rosaluc_: '123456789Ros@',
    hakila0773: '123456789Hak@',
    danielcraftim: '123456789Dan@',
    Felix092971: '123456789Fel@',
    lexx2218: '123456789Lex@',
    blackxzsr: '123456789Bla@',
    dancra57: '123456789Dan@',
    https_meow: '123456789Htt@',
    eliseueureka74818: '123456789Eli@',
    lilnick698: '123456789Lil@',
    ericrossi: '123456789Eri@',
    macacomago: '123456789Mac@',
    gwentennyson2010: '123456789Gwe@',
    jw1980: '123456789Jw_@',
    meucoelho: '123456789Meu@',
    nicolas120795: '123456789Nic@',
    brenopwf: '123456789Bre@',
    Quitedquited: '123456789Qui@',
    ellienigenaa: '123456789Ell@',
    solaria: '123456789Sol@',
    marlissonblanc: '123456789Mar@',
    JujutsuKaisen: '123456789Juj@',
    mpcmaster2024: '123456789Mpc@',
    bugnette: '123456789Bug@',
    blackxzsr: '123456789Bla@',
    bywaldorf: '123456789Byw@',
    realmofjewels: '123456789Rea@',
    princessofstars3: '123456789Pri@',
    ronaldclaw26: '123456789Ron@',
    coeio0177: '123456789Coe@',
    oryan55: '123456789O_r@',
    harizz11: '123456789_Ha@',
    springtrap4947: '123456789Spr@',
    tenosinho_str: '123456789Ten@',
    lisa038149: '123456789Lis@',
    pvdozziezz67296: '123456789Pvd@',
    verdadeira_wikipedia: '123456789Ver@',
    babyz: '123456789Bab@',
    mapadeluz: '123456789Map@',
    Pippoholand: '123456789Pip@',
    mim1zrsh: '123456789Mim@',
    dearladyjupter: '123456789Dea@',
    symphonnyz: '123456789Sym@',
    brinnbolen: '123456789Bri@',
    luckza8: '123456789Luc@',
    sonecadom: '123456789Son@'
};

const professores = {
    Wendydadeepweb: 'TikkiTranformar123@',
    Shadow: 'PlaggDuusuCombinar@'
};

// Função de verificação de login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let errorMessage = '';

    // Verificação de login para aluno
    if (alunos[username] === password) {
        window.location.href = 'fazertarefa.html'; // Redireciona para a página do aluno
    }
    // Verificação de login para professor
    else if (professores[username] === password) {
        window.location.href = 'homeprofessor.html'; // Redireciona para a página do professor
    }
    // Caso os dados não correspondam
    else {
        errorMessage = 'Usuário ou senha incorretos!';
        document.getElementById('errorMessage').innerText = errorMessage;
    }
});
