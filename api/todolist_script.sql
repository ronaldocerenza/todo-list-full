USE todolistdb;

CREATE TABLE todolist (
  id INT AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  isCompleted BOOLEAN NOT NULL
);

INSERT INTO todolist (text, category, isCompleted) VALUES
  ('Fazer café', 'Pessoal', FALSE),
  ('Estudar React', 'Estudos', FALSE),
  ('Criar um todo list', 'Trabalho', FALSE);
