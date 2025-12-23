-- First, drop the default value
ALTER TABLE public.products 
ALTER COLUMN category DROP DEFAULT;

-- Now change column type to text
ALTER TABLE public.products 
ALTER COLUMN category TYPE text USING category::text;

-- Set new default to empty string
ALTER TABLE public.products 
ALTER COLUMN category SET DEFAULT '';

-- Drop the old enum type
DROP TYPE IF EXISTS product_category_type;