import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import type { ContactFormField } from "../../data";
import "./Form.css";

export interface FormProps {
  fields: ContactFormField[];
  submitLabel: string;
  onSubmit: (values: Record<string, string>) => void;
  title?: string;
  description?: string;
}

export const Form = ({
  fields,
  submitLabel,
  onSubmit,
  title,
  description,
}: FormProps) => {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((field) => [field.name, ""])),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Record<string, string> = {};
    for (const field of fields) {
      if (field.required && !(values[field.name] ?? "").trim()) {
        nextErrors[field.name] = `${field.label} es obligatorio`;
      }
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    onSubmit(values);
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      {title && <h3 className="form__title">{title}</h3>}
      {description && <p className="form__description">{description}</p>}

      {fields.map((field) => {
        const error = errors[field.name];
        const fieldId = `form-field-${field.id}`;
        const errorId = `${fieldId}-error`;

        return (
          <div className="form__group" key={field.id}>
            <label className="form__label" htmlFor={fieldId}>
              {field.label}
              {field.required && (
                <span className="form__required" aria-hidden="true">
                  *
                </span>
              )}
            </label>

            {field.type === "textarea" ? (
              <textarea
                className={`form__control form__control--textarea ${error ? "form__control--error" : ""}`.trim()}
                id={fieldId}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                value={values[field.name] ?? ""}
                onChange={handleChange}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                rows={4}
              />
            ) : (
              <input
                className={`form__control ${error ? "form__control--error" : ""}`.trim()}
                id={fieldId}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                value={values[field.name] ?? ""}
                onChange={handleChange}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
              />
            )}

            {error && (
              <p className="form__error" id={errorId} role="alert">
                {error}
              </p>
            )}
          </div>
        );
      })}

      <button className="form__submit" type="submit">
        {submitLabel}
      </button>
    </form>
  );
};
