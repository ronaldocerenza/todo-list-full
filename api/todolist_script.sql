USE todolistdb;

CREATE TABLE todolist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  isCompleted BOOLEAN DEFAULT FALSE
);

INSERT INTO todolist (text, category, isCompleted) VALUES
  ('Lavar o carro', 'Pessoal', FALSE),
  ('Estudar React', 'Estudos', FALSE),
  ('Criar um todo list', 'Trabalho', FALSE);
