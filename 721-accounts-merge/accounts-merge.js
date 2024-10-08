/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const parents = {};
    const email2name = {};
    const emails = {};
    
    const find = (x) => {
        if(parents[x] !== x) parents[x] = find(parents[x])

        return parents[x];
    }

    const union = (x, y) => {
        parents[find(x)] = find(y);
    }


    for(const [name, ...emails] of accounts) {
        for(const email of emails) {
            //email의 부모가 없으면 parents[email] = email로 매칭
            //{ email: email의 parents }
            if(!parents[email]) {
                parents[email] = email;
            }

            email2name[email] = name; //email -> name
            union(email, emails[0]); //emails의 모든 부모를 통일
        }
    }

    //email -> parents로 되어있던 구조를 parents -> email로 바꾸는 과정
    for(const email of Object.keys(parents)) {
        const parent = find(email);
        if(parent in emails) {
            emails[parent].push(email);
        }
        else emails[parent] = [email];
    }

    return Object.entries(emails).map(([email, rest]) => [email2name[email], ...rest.sort()])
};

