<!--   
/**   
 *    
 * @param {} sURL �ղ����ӵ�ַ   
 * @param {} sTitle �ղر���   
 */   
function AddFavorite(sURL, sTitle) {   
    try {   
        window.external.addFavorite(sURL, sTitle);   
    } catch (e) {   
        try {   
            window.sidebar.addPanel(sTitle, sURL, "");   
        } catch (e) {   
            alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");   
        }   
    }   
}   
/**   
 *    
 * @param {} obj ��ǰ����һ����ʹ��this���á�   
 * @param {} vrl ��ҳURL   
 */   
function SetHome(obj, vrl) {   
    try {   
        obj.style.behavior = 'url(#default#homepage)';   
        obj.setHomePage(vrl);   
    } catch (e) {   
        if (window.netscape) {   
            try {   
                netscape.security.PrivilegeManager   
                        .enablePrivilege("UniversalXPConnect");   
            } catch (e) {   
                alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ�� [signed.applets.codebase_principal_support]��ֵ����Ϊ'true',˫�����ɡ�");   
            }   
            var prefs = Components.classes['@mozilla.org/preferences-service;1']   
                    .getService(Components.interfaces.nsIPrefBranch);   
            prefs.setCharPref('browser.startup.homepage', vrl);   
        }   
    }   
}   
//-->  