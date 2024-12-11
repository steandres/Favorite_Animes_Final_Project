import {describe, test, expect, afterEach} from "vitest";
import {cleanup, render, screen} from "@testing-library/react";
import Home from "../../../Routes/Home";

afterEach(() => {
  cleanup();
});

describe("Test <Home />", () => {
  test("Debe renderizar el Home correctamente", () => {
    describe('', () => {
        it('renders an h1 with the correct text', () => {
          render(<Home />);
          const heading = screen.getByRole('heading', { level: 1 });
          expect(heading).toHaveTextContent('Home');
        });

        it('renders an h2 with the text "Loading characters..."', () => {
            render(<Home />);
            
            // Buscar el elemento h2
            const heading = screen.getByRole('heading', { level: 2 });
            
            // Verificar el contenido
            expect(heading).toHaveTextContent('Loading characters...');
          });
      });
	});

});
