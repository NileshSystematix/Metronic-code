"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMockMultilang = (function () {
    function ConfigMockMultilang() {
    }
    ConfigMockMultilang.prototype.init = function () {
        return null;
    };
    ConfigMockMultilang.prototype.getSettings = function (group, key) {
        return {
            i18n: {
                defaultLanguage: {
                    code: 'en',
                    title: 'English'
                },
                availableLanguages: [
                    { code: 'en', title: 'English' },
                    { code: 'es', title: 'Spanish' },
                    { code: 'fr', title: 'French' },
                    { code: 'ru', title: 'Russian' },
                    { code: 'bg', title: 'Bulgarian' }
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
    return ConfigMockMultilang;
}());
exports.ConfigMockMultilang = ConfigMockMultilang;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2kxOG4vdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLW11bHRpbGFuZy5tb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQThCQSxDQUFDO0lBN0JDLGtDQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELHlDQUFXLEdBQVgsVUFBWSxLQUFjLEVBQUUsR0FBWTtRQUN0QyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUU7Z0JBQ0osZUFBZSxFQUFFO29CQUNmLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUssRUFBRSxTQUFTO2lCQUNqQjtnQkFDRCxrQkFBa0IsRUFBRTtvQkFDbEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7b0JBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO29CQUNoQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtvQkFDL0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7b0JBQ2hDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2lCQUNuQzthQUNGO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLEtBQUssRUFBRTtvQkFDTCxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsS0FBSztvQkFDZCxPQUFPLEVBQUUsS0FBSztpQkFDZjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFDSCwwQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5Qlksa0RBQW1CIiwiZmlsZSI6ImFwcC9tb2R1bGVzL2kxOG4vdGVzdGluZy9tb2Nrcy9uZzItY29uZmlnLW11bHRpbGFuZy5tb2NrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbmZpZ01vY2tNdWx0aWxhbmcge1xuICBpbml0KCk6IGFueSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBnZXRTZXR0aW5ncyhncm91cD86IHN0cmluZywga2V5Pzogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaTE4bjoge1xuICAgICAgICBkZWZhdWx0TGFuZ3VhZ2U6IHtcbiAgICAgICAgICBjb2RlOiAnZW4nLFxuICAgICAgICAgIHRpdGxlOiAnRW5nbGlzaCdcbiAgICAgICAgfSxcbiAgICAgICAgYXZhaWxhYmxlTGFuZ3VhZ2VzOiBbXG4gICAgICAgICAgeyBjb2RlOiAnZW4nLCB0aXRsZTogJ0VuZ2xpc2gnIH0sXG4gICAgICAgICAgeyBjb2RlOiAnZXMnLCB0aXRsZTogJ1NwYW5pc2gnIH0sXG4gICAgICAgICAgeyBjb2RlOiAnZnInLCB0aXRsZTogJ0ZyZW5jaCcgfSxcbiAgICAgICAgICB7IGNvZGU6ICdydScsIHRpdGxlOiAnUnVzc2lhbicgfSxcbiAgICAgICAgICB7IGNvZGU6ICdiZycsIHRpdGxlOiAnQnVsZ2FyaWFuJyB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBsb2dnaW5nOiB7XG4gICAgICAgIERFQlVHOiB7XG4gICAgICAgICAgTEVWRUxfMTogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfMjogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfMzogZmFsc2UsXG4gICAgICAgICAgTEVWRUxfNDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiJdfQ==
