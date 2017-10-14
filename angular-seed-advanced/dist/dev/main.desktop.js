"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
console.log("Electron launching with NODE_ENV: " + process.env.NODE_ENV);
var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var shell = electron.shell;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;
var template;
var menu;
var index_1 = require("./app/modules/electron/index");
if (process.env.NODE_ENV === 'development') {
    require('electron-debug')();
}
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('ready', function () {
    mainWindow = new BrowserWindow({ width: 900, height: 620 });
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
    mainWindow.webContents.on('did-navigate-in-page', function (e, url) {
        console.log("Page navigated: " + url);
    });
    var appTitle = "Angular Seed Advanced";
    var langMenu = {
        label: 'Language',
        submenu: []
    };
    var _loop_1 = function () {
        var code = lang.code;
        var langOption = {
            label: lang.title,
            click: function () {
                console.log("Change lang: " + code);
                mainWindow.webContents.executeJavaScript("window.dispatchEvent(new CustomEvent('changeLang', {detail: { value: '" + code + "'} }));");
            }
        };
        langMenu.submenu.push(langOption);
    };
    for (var _i = 0, _a = index_1.DesktopConfig.GET_SUPPORTED_LANGUAGES(); _i < _a.length; _i++) {
        var lang = _a[_i];
        _loop_1();
    }
    var helpMenu = {
        label: 'Help',
        submenu: [{
                label: 'Learn More',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced');
                }
            }, {
                label: 'Issues',
                click: function () {
                    shell.openExternal('https://github.com/NathanWalker/angular-seed-advanced/issues');
                }
            }, {
                label: "My Amazing Parent: Minko Gechev's Angular Seed",
                click: function () {
                    shell.openExternal('https://github.com/mgechev/angular-seed');
                }
            }, {
                label: 'Angular 2',
                click: function () {
                    shell.openExternal('https://angular.io/');
                }
            }, {
                label: 'Electron',
                click: function () {
                    shell.openExternal('http://electron.atom.io/');
                }
            }, {
                label: 'Electron Docs',
                click: function () {
                    shell.openExternal('https://github.com/atom/electron/tree/master/docs');
                }
            }, {
                label: 'Codeology Visualization',
                click: function () {
                    shell.openExternal('http://codeology.braintreepayments.com/nathanwalker/angular-seed-advanced');
                }
            }]
    };
    if (process.platform === 'darwin') {
        template = [{
                label: appTitle,
                submenu: [{
                        label: "About " + appTitle,
                        selector: 'orderFrontStandardAboutPanel:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Services',
                        submenu: []
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Hide Angular Seed Advanced',
                        accelerator: 'Command+H',
                        selector: 'hide:'
                    }, {
                        label: 'Hide Others',
                        accelerator: 'Command+Shift+H',
                        selector: 'hideOtherApplications:'
                    }, {
                        label: 'Show All',
                        selector: 'unhideAllApplications:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Quit',
                        accelerator: 'Command+Q',
                        click: function () {
                            app.quit();
                        }
                    }]
            }, {
                label: 'Edit',
                submenu: [{
                        label: 'Undo',
                        accelerator: 'Command+Z',
                        selector: 'undo:'
                    }, {
                        label: 'Redo',
                        accelerator: 'Shift+Command+Z',
                        selector: 'redo:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Cut',
                        accelerator: 'Command+X',
                        selector: 'cut:'
                    }, {
                        label: 'Copy',
                        accelerator: 'Command+C',
                        selector: 'copy:'
                    }, {
                        label: 'Paste',
                        accelerator: 'Command+V',
                        selector: 'paste:'
                    }, {
                        label: 'Select All',
                        accelerator: 'Command+A',
                        selector: 'selectAll:'
                    }]
            }, {
                label: 'View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: 'Reload',
                        accelerator: 'Command+R',
                        click: function () {
                            mainWindow.reload();
                        }
                    }, {
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle Developer Tools',
                        accelerator: 'Alt+Command+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle Full Screen',
                        accelerator: 'Ctrl+Command+F',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            }, {
                label: 'Window',
                submenu: [{
                        label: 'Minimize',
                        accelerator: 'Command+M',
                        selector: 'performMiniaturize:'
                    }, {
                        label: 'Close',
                        accelerator: 'Command+W',
                        selector: 'performClose:'
                    }, {
                        type: 'separator'
                    }, {
                        label: 'Bring All to Front',
                        selector: 'arrangeInFront:'
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);
    }
    else {
        template = [{
                label: '&File',
                submenu: [{
                        label: '&Open',
                        accelerator: 'Ctrl+O'
                    }, {
                        label: '&Close',
                        accelerator: 'Ctrl+W',
                        click: function () {
                            mainWindow.close();
                        }
                    }]
            }, {
                label: '&View',
                submenu: (process.env.NODE_ENV === 'development') ? [{
                        label: '&Reload',
                        accelerator: 'Ctrl+R',
                        click: function () {
                            mainWindow.reload();
                        }
                    }, {
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }, {
                        label: 'Toggle &Developer Tools',
                        accelerator: 'Alt+Ctrl+I',
                        click: function () {
                            mainWindow.toggleDevTools();
                        }
                    }] : [{
                        label: 'Toggle &Full Screen',
                        accelerator: 'F11',
                        click: function () {
                            mainWindow.setFullScreen(!mainWindow.isFullScreen());
                        }
                    }]
            },
            langMenu,
            helpMenu];
        menu = Menu.buildFromTemplate(template);
        mainWindow.setMenu(menu);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O3dCQUNELEtBQUssRUFBRSx5QkFBeUI7d0JBQ2hDLFdBQVcsRUFBRSxZQUFZO3dCQUN6QixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUM5QixDQUFDO3FCQUNGLENBQUMsR0FBRyxDQUFDO3dCQUNKLEtBQUssRUFBRSxxQkFBcUI7d0JBQzVCLFdBQVcsRUFBRSxLQUFLO3dCQUNsQixLQUFLLEVBQUM7NEJBQ0osVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO3dCQUN2RCxDQUFDO3FCQUNGLENBQUM7YUFDTDtZQUNELFFBQVE7WUFDUixRQUFRLENBQUMsQ0FBQztRQUNaLElBQUksR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0FBRUgsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5kZXNrdG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsicHJvY2Vzcy5lbnYuTk9ERV9FTlYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAncHJvZHVjdGlvbic7XG5jb25zb2xlLmxvZyhgRWxlY3Ryb24gbGF1bmNoaW5nIHdpdGggTk9ERV9FTlY6ICR7cHJvY2Vzcy5lbnYuTk9ERV9FTlZ9YCk7XG5cbi8vIGVsZWN0cm9uXG5jb25zdCBlbGVjdHJvbiA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG5jb25zdCBhcHAgPSBlbGVjdHJvbi5hcHA7XG5jb25zdCBNZW51OiBhbnkgPSBlbGVjdHJvbi5NZW51O1xuY29uc3Qgc2hlbGw6IGFueSA9IGVsZWN0cm9uLnNoZWxsO1xuLy8gY29uc3Qge2NyYXNoUmVwb3J0ZXJ9ID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcbmNvbnN0IEJyb3dzZXJXaW5kb3cgPSBlbGVjdHJvbi5Ccm93c2VyV2luZG93O1xubGV0IG1haW5XaW5kb3c6IGFueSA9IG51bGw7XG5sZXQgdGVtcGxhdGU6IGFueTtcbmxldCBtZW51OiBhbnk7XG5cbi8vIGFwcFxuaW1wb3J0IHsgRGVza3RvcENvbmZpZyB9IGZyb20gJy4vYXBwL21vZHVsZXMvZWxlY3Ryb24vaW5kZXgnO1xuXG4vLyBTYW1wbGVcbi8vIFlvdSB3b3VsZCBuZWVkIGEgdmFsaWQgYHN1Ym1pdFVSTGAgdG8gdXNlXG4vLyBjcmFzaFJlcG9ydGVyLnN0YXJ0KHtcbi8vICAgcHJvZHVjdE5hbWU6ICdBbmd1bGFyU2VlZEFkdmFuY2VkJyxcbi8vICAgY29tcGFueU5hbWU6ICdOYXRoYW5XYWxrZXInLFxuLy8gICBzdWJtaXRVUkw6ICdodHRwczovL2dpdGh1Yi5jb20vTmF0aGFuV2Fsa2VyL2FuZ3VsYXItc2VlZC1hZHZhbmNlZCcsXG4vLyAgIGF1dG9TdWJtaXQ6IHRydWVcbi8vIH0pO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgcmVxdWlyZSgnZWxlY3Ryb24tZGVidWcnKSgpO1xufVxuXG5hcHAub24oJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcbiAgICBhcHAucXVpdCgpO1xuICB9XG59KTtcblxuYXBwLm9uKCdyZWFkeScsICgpID0+IHtcblxuICAvLyBJbml0aWFsaXplIHRoZSB3aW5kb3cgdG8gb3VyIHNwZWNpZmllZCBkaW1lbnNpb25zXG4gIG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyh7IHdpZHRoOiA5MDAsIGhlaWdodDogNjIwIH0pO1xuXG4gIC8vIFRlbGwgRWxlY3Ryb24gd2hlcmUgdG8gbG9hZCB0aGUgZW50cnkgcG9pbnQgZnJvbVxuICBtYWluV2luZG93LmxvYWRVUkwoJ2ZpbGU6Ly8nICsgX19kaXJuYW1lICsgJy9pbmRleC5odG1sJyk7XG5cbiAgLy8gQ2xlYXIgb3V0IHRoZSBtYWluIHdpbmRvdyB3aGVuIHRoZSBhcHAgaXMgY2xvc2VkXG4gIG1haW5XaW5kb3cub24oJ2Nsb3NlZCcsICgpID0+IHtcbiAgICBtYWluV2luZG93ID0gbnVsbDtcbiAgfSk7XG5cbiAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vbignZGlkLW5hdmlnYXRlLWluLXBhZ2UnLCAoZTogYW55LCB1cmw6IHN0cmluZykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBQYWdlIG5hdmlnYXRlZDogJHt1cmx9YCk7XG4gIH0pO1xuXG4gIGxldCBhcHBUaXRsZTogc3RyaW5nID0gYEFuZ3VsYXIgU2VlZCBBZHZhbmNlZGA7XG5cbiAgbGV0IGxhbmdNZW51OiBhbnkgPSB7XG4gICAgbGFiZWw6ICdMYW5ndWFnZScsXG4gICAgc3VibWVudTogW11cbiAgfTtcbiAgZm9yICh2YXIgbGFuZyBvZiBEZXNrdG9wQ29uZmlnLkdFVF9TVVBQT1JURURfTEFOR1VBR0VTKCkpIHtcbiAgICBsZXQgY29kZSA9IGxhbmcuY29kZTtcbiAgICBsZXQgbGFuZ09wdGlvbiA9IHtcbiAgICAgIGxhYmVsOiBsYW5nLnRpdGxlLFxuICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2hhbmdlIGxhbmc6ICR7Y29kZX1gKTtcbiAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VMYW5nJywge2RldGFpbDogeyB2YWx1ZTogJyR7Y29kZX0nfSB9KSk7YCk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsYW5nTWVudS5zdWJtZW51LnB1c2gobGFuZ09wdGlvbik7XG4gIH1cblxuICBsZXQgaGVscE1lbnU6IGFueSA9IHtcbiAgICBsYWJlbDogJ0hlbHAnLFxuICAgIHN1Ym1lbnU6IFt7XG4gICAgICBsYWJlbDogJ0xlYXJuIE1vcmUnLFxuICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYXRoYW5XYWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkJyk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgICBsYWJlbDogJ0lzc3VlcycsXG4gICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9OYXRoYW5XYWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkL2lzc3VlcycpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiBgTXkgQW1hemluZyBQYXJlbnQ6IE1pbmtvIEdlY2hldidzIEFuZ3VsYXIgU2VlZGAsXG4gICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICBzaGVsbC5vcGVuRXh0ZXJuYWwoJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZ2VjaGV2L2FuZ3VsYXItc2VlZCcpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnQW5ndWxhciAyJyxcbiAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9hbmd1bGFyLmlvLycpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnRWxlY3Ryb24nLFxuICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwOi8vZWxlY3Ryb24uYXRvbS5pby8nKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ0VsZWN0cm9uIERvY3MnLFxuICAgICAgICBjbGljazogKCkgPT4ge1xuICAgICAgICAgIHNoZWxsLm9wZW5FeHRlcm5hbCgnaHR0cHM6Ly9naXRodWIuY29tL2F0b20vZWxlY3Ryb24vdHJlZS9tYXN0ZXIvZG9jcycpO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnQ29kZW9sb2d5IFZpc3VhbGl6YXRpb24nLFxuICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKCdodHRwOi8vY29kZW9sb2d5LmJyYWludHJlZXBheW1lbnRzLmNvbS9uYXRoYW53YWxrZXIvYW5ndWxhci1zZWVkLWFkdmFuY2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH1dXG4gIH07XG5cbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgdGVtcGxhdGUgPSBbe1xuICAgICAgbGFiZWw6IGFwcFRpdGxlLFxuICAgICAgc3VibWVudTogW3tcbiAgICAgICAgbGFiZWw6IGBBYm91dCAke2FwcFRpdGxlfWAsXG4gICAgICAgIHNlbGVjdG9yOiAnb3JkZXJGcm9udFN0YW5kYXJkQWJvdXRQYW5lbDonXG4gICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnU2VydmljZXMnLFxuICAgICAgICAgIHN1Ym1lbnU6IFtdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICdIaWRlIEFuZ3VsYXIgU2VlZCBBZHZhbmNlZCcsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0gnLFxuICAgICAgICAgIHNlbGVjdG9yOiAnaGlkZTonXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBsYWJlbDogJ0hpZGUgT3RoZXJzJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrU2hpZnQrSCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICdoaWRlT3RoZXJBcHBsaWNhdGlvbnM6J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgbGFiZWw6ICdTaG93IEFsbCcsXG4gICAgICAgICAgc2VsZWN0b3I6ICd1bmhpZGVBbGxBcHBsaWNhdGlvbnM6J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnUXVpdCcsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK1EnLFxuICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgIGFwcC5xdWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XVxuICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdFZGl0JyxcbiAgICAgICAgc3VibWVudTogW3tcbiAgICAgICAgICBsYWJlbDogJ1VuZG8nLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtaJyxcbiAgICAgICAgICBzZWxlY3RvcjogJ3VuZG86J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ1JlZG8nLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdTaGlmdCtDb21tYW5kK1onLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdyZWRvOidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0eXBlOiAnc2VwYXJhdG9yJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ3V0JyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtYJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnY3V0OidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvcHknLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK0MnLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICdjb3B5OidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ1Bhc3RlJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtWJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiAncGFzdGU6J1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VsZWN0IEFsbCcsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrQScsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3NlbGVjdEFsbDonXG4gICAgICAgICAgfV1cbiAgICAgIH0sIHtcbiAgICAgICAgbGFiZWw6ICdWaWV3JyxcbiAgICAgICAgc3VibWVudTogKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSA/IFt7XG4gICAgICAgICAgbGFiZWw6ICdSZWxvYWQnLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ29tbWFuZCtSJyxcbiAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICBtYWluV2luZG93LnJlbG9hZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRnVsbCBTY3JlZW4nLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdDdHJsK0NvbW1hbmQrRicsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cuc2V0RnVsbFNjcmVlbighbWFpbldpbmRvdy5pc0Z1bGxTY3JlZW4oKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgRGV2ZWxvcGVyIFRvb2xzJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQWx0K0NvbW1hbmQrSScsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSA6IFt7XG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSBGdWxsIFNjcmVlbicsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrQ29tbWFuZCtGJyxcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy5zZXRGdWxsU2NyZWVuKCFtYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XVxuICAgICAgfSwge1xuICAgICAgICBsYWJlbDogJ1dpbmRvdycsXG4gICAgICAgIHN1Ym1lbnU6IFt7XG4gICAgICAgICAgbGFiZWw6ICdNaW5pbWl6ZScsXG4gICAgICAgICAgYWNjZWxlcmF0b3I6ICdDb21tYW5kK00nLFxuICAgICAgICAgIHNlbGVjdG9yOiAncGVyZm9ybU1pbmlhdHVyaXplOidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdDbG9zZScsXG4gICAgICAgICAgICBhY2NlbGVyYXRvcjogJ0NvbW1hbmQrVycsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ3BlcmZvcm1DbG9zZTonXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdHlwZTogJ3NlcGFyYXRvcidcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ0JyaW5nIEFsbCB0byBGcm9udCcsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2FycmFuZ2VJbkZyb250OidcbiAgICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIGxhbmdNZW51LFxuICAgICAgaGVscE1lbnVdO1xuXG4gICAgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIE1lbnUuc2V0QXBwbGljYXRpb25NZW51KG1lbnUpO1xuICB9IGVsc2Uge1xuICAgIHRlbXBsYXRlID0gW3tcbiAgICAgIGxhYmVsOiAnJkZpbGUnLFxuICAgICAgc3VibWVudTogW3tcbiAgICAgICAgbGFiZWw6ICcmT3BlbicsXG4gICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtPJ1xuICAgICAgfSwge1xuICAgICAgICAgIGxhYmVsOiAnJkNsb3NlJyxcbiAgICAgICAgICBhY2NlbGVyYXRvcjogJ0N0cmwrVycsXG4gICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgbWFpbldpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfV1cbiAgICB9LCB7XG4gICAgICAgIGxhYmVsOiAnJlZpZXcnLFxuICAgICAgICBzdWJtZW51OiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpID8gW3tcbiAgICAgICAgICBsYWJlbDogJyZSZWxvYWQnLFxuICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQ3RybCtSJyxcbiAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICBtYWluV2luZG93LnJlbG9hZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdUb2dnbGUgJkZ1bGwgU2NyZWVuJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnRjExJyxcbiAgICAgICAgICAgIGNsaWNrOigpID0+IHtcbiAgICAgICAgICAgICAgbWFpbldpbmRvdy5zZXRGdWxsU2NyZWVuKCFtYWluV2luZG93LmlzRnVsbFNjcmVlbigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRGV2ZWxvcGVyIFRvb2xzJyxcbiAgICAgICAgICAgIGFjY2VsZXJhdG9yOiAnQWx0K0N0cmwrSScsXG4gICAgICAgICAgICBjbGljazooKSA9PiB7XG4gICAgICAgICAgICAgIG1haW5XaW5kb3cudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XSA6IFt7XG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSAmRnVsbCBTY3JlZW4nLFxuICAgICAgICAgICAgYWNjZWxlcmF0b3I6ICdGMTEnLFxuICAgICAgICAgICAgY2xpY2s6KCkgPT4ge1xuICAgICAgICAgICAgICBtYWluV2luZG93LnNldEZ1bGxTY3JlZW4oIW1haW5XaW5kb3cuaXNGdWxsU2NyZWVuKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1dXG4gICAgICB9LFxuICAgICAgbGFuZ01lbnUsXG4gICAgICBoZWxwTWVudV07XG4gICAgbWVudSA9IE1lbnUuYnVpbGRGcm9tVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIG1haW5XaW5kb3cuc2V0TWVudShtZW51KTtcbiAgfVxuXG59KTtcbiJdfQ==
