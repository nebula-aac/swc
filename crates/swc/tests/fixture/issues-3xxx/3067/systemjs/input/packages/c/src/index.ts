// Simulate accessing a .js file in a third party package that shouldn't be edited
import something from 'lodash/dist/something.js'
export function displayC(): string {
    something()
    return 'Display C'
}
