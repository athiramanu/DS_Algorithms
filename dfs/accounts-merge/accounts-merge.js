/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

 var accountsMerge = function(accounts) {    
    let [emailGroups, emailNameMapping] = groupEmailsAndNames(accounts);
    let finalEmailGroup = mergeEmailGroups(emailGroups);
    return mergeEmailGroupsToName(emailNameMapping, finalEmailGroup);
};

function getPrimaryEmail(email, emailGroups) {
    while (emailGroups[email] != email) {
        email = emailGroups[email];
    }
    return email;
}

function groupEmailsAndNames(accounts) {
    let emailGroups = {};
    let emailNameMapping = {};
    
    for (let account of accounts) {
        let name = account[0];
        let primaryEmail = account[1];
        
        if (primaryEmail in emailGroups) {
            primaryEmail = getPrimaryEmail(primaryEmail, emailGroups)
        } else {
            emailNameMapping[primaryEmail] = name;
            emailGroups[primaryEmail] = primaryEmail;
        }
        
        for (let emailIdx = 2; emailIdx < account.length; emailIdx++) {
            if (account[emailIdx] in emailGroups) {
                let oldPrimaryEmail = getPrimaryEmail(account[emailIdx], emailGroups);
                emailGroups[oldPrimaryEmail] = primaryEmail;
            } else {
                emailGroups[account[emailIdx]] = primaryEmail;
            }
        }
    }
    
    return [emailGroups, emailNameMapping]
}

function mergeEmailGroups(emailGroups) {
    let finalEmailGroup = {};
    
    for (let group in emailGroups) {
        let primaryEmail = getPrimaryEmail(group, emailGroups);
        if (primaryEmail in finalEmailGroup) {
            finalEmailGroup[primaryEmail].add(group);
        } else {
            finalEmailGroup[primaryEmail] = new Set([group]);
        }
    }
    
    return finalEmailGroup;
}

function mergeEmailGroupsToName(emailNameMapping, finalEmailGroup) {
    let mergedAccounts = [];
    
    for (let group in finalEmailGroup) {
        let emails = [...finalEmailGroup[group]].sort();
        let name = emailNameMapping[group];
        mergedAccounts.push([name, ...emails]);
    }
    
    return mergedAccounts;
}