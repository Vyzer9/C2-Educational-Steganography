// Ativa as abas do Bootstrap no index.html
    var triggerTabList = [].slice.call(document.querySelectorAll('#agentTabs a'))
    triggerTabList.forEach(function (triggerEl) {
        var tabTrigger = new bootstrap.Tab(triggerEl)

        triggerEl.addEventListener('click', function (event) {
            event.preventDefault()
            tabTrigger.show()
        })
    })