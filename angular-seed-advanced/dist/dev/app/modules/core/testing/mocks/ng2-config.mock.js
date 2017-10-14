"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMock = (function () {
    function ConfigMock() {
    }
    ConfigMock.prototype.init = function () {
        return null;
    };
    ConfigMock.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    {
                        code: 'en',
                        title: 'English'
                    }
                ]
            },
            logging: {
                DEBUG: {
                    LEVEL_1: false,
                    LEVEL_2: false,
                    LEVEL_3: false,
                    LEVEL_4: false
                }
            }
        };
    };
    return ConfigMock;
}());
exports.ConfigMock = ConfigMock;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLm1vY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBNkJBLENBQUM7SUE1QkMseUJBQUksR0FBSjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxVQUFZLEtBQWMsRUFBRSxHQUFZO1FBQ3RDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRTtnQkFDSixlQUFlLEVBQUU7b0JBQ2YsSUFBSSxFQUFFLElBQUk7b0JBQ1YsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2dCQUNELGtCQUFrQixFQUFFO29CQUNsQjt3QkFDRSxJQUFJLEVBQUUsSUFBSTt3QkFDVixLQUFLLEVBQUUsU0FBUztxQkFDakI7aUJBQ0Y7YUFDRjtZQUNELE9BQU8sRUFBRTtnQkFDUCxLQUFLLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7b0JBQ2QsT0FBTyxFQUFFLEtBQUs7aUJBQ2Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQTdCQSxBQTZCQyxJQUFBO0FBN0JZLGdDQUFVIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2NvcmUvdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLm1vY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlnTW9jayB7XG4gIGluaXQoKTogYW55IHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGdldFNldHRpbmdzKGdyb3VwPzogc3RyaW5nLCBrZXk/OiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpMThuOiB7XG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZToge1xuICAgICAgICAgIGNvZGU6ICdlbicsXG4gICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xuICAgICAgICB9LFxuICAgICAgICBhdmFpbGFibGVMYW5ndWFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjb2RlOiAnZW4nLFxuICAgICAgICAgICAgdGl0bGU6ICdFbmdsaXNoJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGxvZ2dpbmc6IHtcbiAgICAgICAgREVCVUc6IHtcbiAgICAgICAgICBMRVZFTF8xOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF8yOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF8zOiBmYWxzZSxcbiAgICAgICAgICBMRVZFTF80OiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIl19
