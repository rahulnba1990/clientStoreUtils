/*eslint-disable no-unused-vars*/
/*eslint-disable no-console*/
/* eslint-env node, browser */
/* global console, window, localStorage, document */
var clientStoreUtils;
(function () {
    "use strict";

    clientStoreUtils = {
        NO_LOCALSTORE_SUPORT: "This environment does not support local storage.",
        NO_SESSIONSTORE_SUPORT: "This environment does not support session storage.",
        setLocalStoreItem: function (key, data, format) {
            if (window.localStorage) {
                if (!key) {
                    throw "Please provice key name for local store.";
                }
                if (!data) {
                    throw "Please provice value for local store.";
                }
                try {
                    if (format && format === "JSON") {
                        data = JSON.stringify(data);
                    }
                    localStorage.setItem(key, data);
                } catch (e) {
                    throw e;
                }
            } else {
                throw this.NO_LOCALSTORE_SUPORT;
            }
        },
        getLocalStoreItem: function (key, format) {
            if (window.localStorage) {
                try {
                    var data = localStorage.getItem(key);
                    if (data !== null) {
                        if (format) {
                            if (format === "JSON") {
                                return JSON.parse(data);
                            } else if (format === "INTEGER") {
                                return parseInt(data);
                            } else if (format === "FLOAT") {
                                return parseFloat(data);
                            } else {
                                return data;
                            }
                        } else {
                            return data;
                        }

                    } else {
                        return null;
                    }
                } catch (e) {
                    throw e;
                }
            } else {
                throw this.NO_LOCALSTORE_SUPORT;
            }
        },
        removeLocalStoreItem: function (key) {
            if (window.localStorage) {
                if (key) {
                    try {
                        localStorage.removeItem(key);
                    } catch (e) {
                        console.log(e);
                    }
                } else {
                    throw "No key provided for removal.";
                }
            }
        },

        setSessionStoreItem: function (key, data, format) {
            if (window.sessionStorage) {
                if (!key) {
                    throw "Please provice key name for local store.";
                }
                if (!data) {
                    throw "Please provice value for local store.";
                }
                try {
                    if (format && format === "JSON") {
                        data = JSON.stringify(data);
                    }
                    sessionStorage.setItem(key, data);
                } catch (e) {
                    throw e;
                }
            } else {
                throw this.NO_SESSIONSTORE_SUPORT;
            }
        },
        getSessionStoreItem: function (key, format) {
            if (window.sessionStorage) {
                try {
                    var data = sessionStorage.getItem(key);
                    if (data !== null) {
                        if (format) {
                            if (format === "JSON") {
                                return JSON.parse(data);
                            } else if (format === "INTEGER") {
                                return parseInt(data);
                            } else if (format === "FLOAT") {
                                return parseFloat(data);
                            } else {
                                return data;
                            }
                        } else {
                            return data;
                        }
                    } else {
                        return null;
                    }
                } catch (e) {
                    throw e;
                }
            } else {
                throw this.NO_SESSIONSTORE_SUPORT;
            }
        },
        removeSessionStoreItem: function (key) {
            if (window.sessionStorage) {
                if (key) {
                    try {
                        sessionStorage.removeItem(key);
                    } catch (e) {
                        throw e;
                    }
                } else {
                    throw "No key provided for removal.";
                }
            }
        },
        setCookie: function (name, value, days, hours, minutes, seconds, format) {
            if (!name) {
                throw "Please provide name for the cookie.";
            }
            /* else if (!value) {
                 throw "Please provide value for the cookie.";
             }*/
            else if (!days && !hours && !minutes && !seconds) {
                throw "Please provide time params for the cookie.";
            } else if (isNaN(days) && isNaN(hours) && isNaN(minutes) && isNaN(seconds)) {
                throw "Please provide valid time params for the cookie.";
            } else {
                var expires = "";
                if (days) {
                    var date = new Date();
                    var time = date.getTime();
                    if (days && !isNaN(days)) {
                        time = time + (days * 24 * 60 * 60 * 1000);
                    }
                    if (hours && !isNaN(hours)) {
                        time = time + (hours * 60 * 60 * 1000);
                    }
                    if (minutes && !isNaN(minutes)) {
                        time = time + (minutes * 60 * 1000);
                    }
                    if (seconds && !isNaN(seconds)) {
                        time = time + (seconds * 1000);
                    }
                    date.setTime(time);
                    expires = "; expires=" + date.toUTCString();
                    if (format) {
                        if (format === "JSON") {
                            value = JSON.stringify(value);
                        }
                    }
                }
                try {
                    document.cookie = name + "=" + value + expires + "; path=/";
                } catch (e) {
                    throw e;
                }
            }
        },
        getCookie: function (name) {
            if (!name) {
                throw "Please provide name of cookie to get.";
            }
            try {
                name = name + "=";
                var decodedCookie = decodeURIComponent(document.cookie),
                    ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) === 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return null;
            } catch (e) {
                throw e;
            }

        },
        eraseCookie: function (name) {
            if (!name) {
                throw "Please provide name of cookie to erase.";
            }
            this.setCookie(name, "", -1);
        }
        /*,
                addIndexedDB: function (dbName, key, storeName, data) {
                    var db;
                    var request = window.indexedDB.open(dbName, 1);

                    request.onerror = function (event) {
                        throw "IndexedDb error: " + event;
                    };

                    request.onsuccess = function (event) {
                        db = request.result;
                        //console.log("success: " + db);
                    };

                    request.onupgradeneeded = function (event) {
                        var db = event.target.result;
                        var objectStore = db.createObjectStore(storeName, {
                            keyPath: key
                        });
                    };

                    var addRequest = db.transaction([storeName], "readwrite")
                        .objectStore(storeName)
                        .add(data);

                    addRequest.onsuccess = function (event) {
                        //alert("Prasad has been added to your database.");
                    };

                    addRequest.onerror = function (event) {
                        throw "Unable to add data\r\nPrasad is already exist in your database! ", event;
                    };
                },
                readIndexedDB: function (dbName, storeName, key) {
                    var transaction = db.transaction([storeName]);
                    var objectStore = transaction.objectStore(storeName);
                    var request = objectStore.get(key);

                    request.onerror = function (event) {
                        throw "Unable to retrieve data from database!", event;
                    };

                    request.onsuccess = function (event) {
                        
                    };
                }*/
    };
})();
