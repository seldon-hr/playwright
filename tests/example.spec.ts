import { test, expect } from '@playwright/test';

/* Pruba de uso de Cotización dentro de Salud. 
    - Se ingresa a la URL de cotización.
      Consideración de que la sesión ya está iniciada, de lo contraio sería iniciar sesión.
      Sin embargo, existe un captcha, y habría que poner a playwright a resolverlo con AI.
    - Se ingresa el nombre del asegurado.
    - Se agrega el asegurado.
    - Se realiza la cotización.
    - Se espera que se muestre el resultado de la cotización.
*/
//Función de test.
test('test', async ({ page }) => {
  await page.goto('http://11.50.0.151:7003/opl/cotizador');
  await page.getByRole('textbox', { name: 'Usuario' }).click();
  await page.getByRole('textbox', { name: 'NOMBRE ASEGURADO' }).click();
  await page.getByRole('textbox', { name: 'NOMBRE ASEGURADO' }).fill('Alda Jocelyn');
  await page.getByRole('button', { name: 'Agregar asegurado' }).click();
  await page.getByRole('button', { name: 'Cotizar' }).click();
});
