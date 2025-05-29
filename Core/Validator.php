<?php

namespace Core;

class Validator
{
    public static function string($value, $min = 1, $max = INF)
    {
        $value = trim($value);

        return strlen($value) >= $min && strlen($value) <= $max;
    }

    public static function email($value)
    {
        return filter_var($value, FILTER_VALIDATE_EMAIL);
    }

    public static function phone($value)
    {
        // validate phone number format
        return preg_match('/^(?:(?:\+44\s?|0)(?:1|2|3|7)(?:\d\s?){8,9})$/', $value);
    }
}
