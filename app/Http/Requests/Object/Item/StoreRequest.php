<?php

namespace App\Http\Requests\Object\Item;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
//        return false;
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'object_type_id' => 'required|integer|exists:object_types,id',
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Поле «Имя объекта» является обязательным.',
            'object_type_id.required' => 'Поле «Тип объекта» является обязательным.',
        ];
    }
}
